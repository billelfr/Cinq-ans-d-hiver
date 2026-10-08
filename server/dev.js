import { spawn } from 'node:child_process';

const children = [
    spawn(process.execPath, ['--watch', 'server/index.js'], {
        stdio: 'inherit',
        env: { ...process.env, PORT: process.env.API_PORT || '3001' },
    }),
    spawn(process.execPath, ['node_modules/vite/bin/vite.js'], { stdio: 'inherit' }),
];

let shuttingDown = false;

const stopChildren = (signal = 'SIGTERM') => {
    if (shuttingDown) return;
    shuttingDown = true;
    for (const child of children) {
        if (!child.killed) child.kill(signal);
    }
};

for (const child of children) {
    child.on('error', (error) => {
        console.error('Could not start a development process:', error.message);
        stopChildren();
        process.exitCode = 1;
    });
    child.on('exit', (code) => {
        if (!shuttingDown) {
            process.exitCode = code || 0;
            stopChildren();
        }
    });
}

process.on('SIGINT', () => stopChildren('SIGINT'));
process.on('SIGTERM', () => stopChildren('SIGTERM'));