module.exports = {
    apps: [
        {
            name: `serve-app`,
            script: 'serve',
            "watch": true,
            env: {
                PM2_SERVE_PATH: './webpage-build/dist',
                PM2_SERVE_PORT: 4173,
                PM2_SERVE_SPA: 'true',
                NODE_ENV: 'development',
            },
        },
    ],
};
