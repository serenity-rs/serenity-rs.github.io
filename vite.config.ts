import { defineConfig } from "vite";

import presetenv, { type DirectionFlow } from "postcss-preset-env";
import cssnano from "cssnano";

import { resolve } from "node:path";

const assetsDir = "assets/";

export default defineConfig({
    root: resolve(__dirname, "src"),
    publicDir: resolve(__dirname, "public"),
    base: "/",
    server: {
        host: "localhost",
        port: 3000,
        open: false,
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    css: {
        postcss: {
            plugins: [
                presetenv({
                    logical: {
                        inlineDirection: "left-to-right" as DirectionFlow,
                        blockDirection: "top-to-bottom" as DirectionFlow,
                    },
                }),
                cssnano({}),
            ],
        },
    },
    build: {
        outDir: resolve(__dirname, "docs"),
        assetsDir,
        emptyOutDir: true,
        target: "es2015",
        rollupOptions: {
            input: [resolve(__dirname, "src", "index.html")],
            output: {
                entryFileNames: `${assetsDir}[name].js`,
                chunkFileNames: `${assetsDir}[name].[ext]`,
                assetFileNames: `${assetsDir}[name].[ext]`,
            },
        },
    },
});
