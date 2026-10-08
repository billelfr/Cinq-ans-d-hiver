# Farah Tilmatine website

React + Vite author website with an Express API and MongoDB-backed bilingual content editor.

## Configure MongoDB and editor access

1. Create a free MongoDB Atlas cluster, a database user, and allow the server's IP address in Atlas **Network Access**.
2. Copy `.env.example` to `.env` in the project root.
3. Set `MONGODB_URI` to the Atlas connection URI, `MONGODB_DB` to the database name, and choose an `ADMIN_PASSWORD` of at least 8 characters. Use a longer, unique password before making the editor available on the public internet.
4. Set `SESSION_SECRET` to a random secret of at least 32 characters. Keep `.env` private; it is excluded from Git.

Do not put database credentials in frontend code or commit `.env`. The browser only communicates with this project's API; MongoDB credentials remain on the server.

## Run locally

Run `npm run dev` to start the Vite website on port 3000 and the API on port 3001. The Vite development server proxies `/api` requests to the API.

Open `/admin/editor` to sign in with `ADMIN_PASSWORD`; the password prompt appears every time the editor is opened. Edit English and French text, then choose **Save content**. The public website reads the saved document from MongoDB. The API uses an HTTP-only session cookie. Login attempts are not rate-limited, so use a strong, unique password before public deployment.

The site remains viewable with its built-in copy before MongoDB is configured, but saving requires a working database and admin configuration.

## API routes

- `GET /api/health` — API and MongoDB connection status
- `GET /api/content` — public bilingual website content
- `POST /api/admin/login` — sign in with the configured admin password
- `GET /api/admin/session` — verify the current editor session
- `PUT /api/admin/content` — save the English and French content (admin session required)
- `POST /api/admin/logout` — end the editor session

## Production

Build the frontend with `npm run build`, then run `npm start` on a Node.js host that can reach MongoDB Atlas. Configure the same environment variables in the hosting provider's secret/environment settings. The Express server serves both `dist/` and the API, so deploy the app as a Node service rather than a static-only site. Use HTTPS in production.
# Cinq-ans-d-hiver
