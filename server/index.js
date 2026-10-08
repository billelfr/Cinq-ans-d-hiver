import 'dotenv/config';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT || 3001);
const sessionCookie = 'farah_admin';
const sessionDurationMs = 8 * 60 * 60 * 1000;
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const contentSchema = new mongoose.Schema(
    {
        key: { type: String, required: true, unique: true },
        content: { type: mongoose.Schema.Types.Mixed, required: true },
    },
    { timestamps: true }
);

const SiteContent = mongoose.model('SiteContent', contentSchema);

app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '100kb' }));

const makeSessionCookieOptions = () => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: sessionDurationMs,
    path: '/api/admin',
});

const requireAdmin = (req, res, next) => {
    if (!process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 32) {
        return res.status(503).json({ error: 'Admin authentication is not configured on the server.' });
    }

    const token = req.cookies?.[sessionCookie];
    if (!token) {
        return res.status(401).json({ error: 'Admin sign-in required.' });
    }

    try {
        jwt.verify(token, process.env.SESSION_SECRET);
        return next();
    } catch {
        res.clearCookie(sessionCookie, { ...makeSessionCookieOptions(), maxAge: undefined });
        return res.status(401).json({ error: 'Admin session expired. Sign in again.' });
    }
};

const requireDatabase = (_req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        return res.status(503).json({ error: 'MongoDB is not connected. Configure the database and try again.' });
    }
    return next();
};

// Parse only the editor's session cookie. This keeps cookie handling limited to this API.
app.use('/api/admin', (req, _res, next) => {
    const cookieHeader = req.headers.cookie || '';
    req.cookies = Object.fromEntries(
        cookieHeader.split(';').map((part) => {
            const separator = part.indexOf('=');
            return separator < 0
                ? ['', '']
                : [part.slice(0, separator).trim(), decodeURIComponent(part.slice(separator + 1).trim())];
        }).filter(([name]) => name)
    );
    next();
});

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.get('/api/content', requireDatabase, async (_req, res, next) => {
    try {
        const record = await SiteContent.findOne({ key: 'main' }).lean();
        res.json({ content: record?.content ?? null });
    } catch (error) {
        next(error);
    }
});

app.post('/api/admin/login', (req, res) => {
    if (!process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD.length < 8 || !process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 32) {
        return res.status(503).json({ error: 'Admin authentication is not configured on the server.' });
    }

    const suppliedPassword = typeof req.body?.password === 'string' ? req.body.password : '';
    const expectedPassword = process.env.ADMIN_PASSWORD;
    const supplied = Buffer.from(suppliedPassword);
    const expected = Buffer.from(expectedPassword);
    const passwordMatches = supplied.length === expected.length && crypto.timingSafeEqual(supplied, expected);

    if (!passwordMatches) {
        return res.status(401).json({ error: 'Incorrect password.' });
    }

    const token = jwt.sign({ role: 'editor' }, process.env.SESSION_SECRET, { expiresIn: '8h' });
    res.cookie(sessionCookie, token, makeSessionCookieOptions());
    return res.json({ authenticated: true });
});

app.get('/api/admin/session', (req, res) => {
    const token = req.cookies?.[sessionCookie];
    if (!token || !process.env.SESSION_SECRET) {
        return res.json({ authenticated: false });
    }

    try {
        jwt.verify(token, process.env.SESSION_SECRET);
        return res.json({ authenticated: true });
    } catch {
        res.clearCookie(sessionCookie, { ...makeSessionCookieOptions(), maxAge: undefined });
        return res.json({ authenticated: false });
    }
});

app.post('/api/admin/logout', requireAdmin, (_req, res) => {
    res.clearCookie(sessionCookie, { ...makeSessionCookieOptions(), maxAge: undefined });
    res.json({ authenticated: false });
});

app.put('/api/admin/content', requireAdmin, requireDatabase, async (req, res, next) => {
    try {
        const content = req.body?.content;
        if (!content || typeof content !== 'object' || !content.en || !content.fr) {
            return res.status(400).json({ error: 'Content must include English and French versions.' });
        }

        const record = await SiteContent.findOneAndUpdate(
            { key: 'main' },
            { $set: { content } },
            { returnDocument: 'after', upsert: true, runValidators: true, setDefaultsOnInsert: true }
        ).lean();

        return res.json({ content: record.content, updatedAt: record.updatedAt });
    } catch (error) {
        next(error);
    }
});

app.use('/api', (_req, res) => res.status(404).json({ error: 'API route not found.' }));

const distPath = path.join(projectRoot, 'dist');
app.use(express.static(distPath));
app.get(/.*/, (_req, res, next) => {
    res.sendFile(path.join(distPath, 'index.html'), (error) => {
        if (error) next(error);
    });
});

app.use((error, _req, res, _next) => {
    console.error('Request failed:', error.message);
    res.status(500).json({ error: 'The request could not be completed.' });
});

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {
        ...(process.env.MONGODB_DB ? { dbName: process.env.MONGODB_DB } : {}),
    }).catch((error) => {
        console.error('Could not connect to MongoDB:', error.message);
    });
} else {
    console.warn('MONGODB_URI is not configured; the site will use its built-in content until MongoDB is connected.');
}

app.listen(port, '0.0.0.0', () => {
    console.log(`Farah site/API listening on http://localhost:${port}`);
});