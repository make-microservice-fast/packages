import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: [
  //       "react",
  //       "react-dom",
  //       "tailwindcss",
  //       "class-variance-authority",
  //       "clsx",
  //       "tailwind-merge",
  //       "lucide-react",
  //     ],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         react: "React",
  //         "react-dom": "ReactDOM",
  //         tailwindcss: "tailwindcss",
  //         "class-variance-authority": "classVarianceAuthority",
  //         clsx: "clsx",
  //         "tailwind-merge": "tailwindMerge",
  //         "lucide-react": "lucideReact",
  //       },
  //     },
  //   },
  // },
});
