// import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives"
import { defineConfig } from "tsup"

export default defineConfig((env) => {
    return {
        entry: {
            index: "./src/index.ts",
            // server: "./src/server.ts",
            // tanstack: "./src/tanstack.ts",
            // instantdb: "./src/instantdb.ts",
            // triplit: "./src/triplit.ts"
        },
        format: ["esm", "cjs"],
        splitting: true,
        cjsInterop: true,
        skipNodeModulesBundle: true,
        treeshake: false,
        metafile: true,
        tsconfig: 'tsconfig.app.json'
        // esbuildPlugins: [
        //     preserveDirectivesPlugin({
        //         directives: ["use client", "use strict"],
        //         include: /\.(js|ts|jsx|tsx)$/,
        //         exclude: /node_modules/
        //     })
        // ]
    }
})