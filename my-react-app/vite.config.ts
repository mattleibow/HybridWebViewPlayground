import { defineConfig, loadEnv } from 'vite';
import plugin from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [
            plugin(),
            createHtmlPlugin({
                inject: {
                    data: {
                        HYBRIDWEBVIEW_SCRIPT: env.HYBRIDWEBVIEW_SCRIPT,
                        MAUIAPP_SCRIPT: env.MAUIAPP_SCRIPT,
                    }
                }
            })
        ],
        define: {
            BUILD_TYPE: JSON.stringify(env.BUILD_TYPE),
        },
        server: {
            port: 54579,
        }
    };
})
