import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';


dotenv.config(); // This loads the .env file at the root of your project

const keyPath = process.env.KEYPATH;
const certPath = process.env.CERTPATH;

if (!keyPath || !certPath) {
    throw new Error("SSL certificate path and key path must be defined in the environment variables.");
}

const config = {
    plugins: [sveltekit()],
    resolve: {
        preserveSymlinks: true
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/styles/main.scss";'
            }
        }
    },
    server: {
        port: 1000,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath)
        },
        proxy: {},
    }
};

export default config;
