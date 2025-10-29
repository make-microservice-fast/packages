import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "packages",
  plugins: [react(), ghPages()],
  build: {
    outDir: "build", // 将输出目录改为 'dist-custom'
  },
});
