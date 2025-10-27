import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts' // 用于生成 .d.ts 类型文件

 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  dts({
      insertTypesEntry: true, // 在入口文件中插入类型声明
      rollupTypes: true, // 汇总所有类型声明到一个文件
      entryRoot: path.resolve(__dirname, 'src'), // 确保 dts 从 src 根目录开始解析
      tsconfigPath: './tsconfig.app.json'
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // 组件库的入口文件
      name: 'index', // 全局变量名，在 UMD 格式下有用
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es') {
          return 'index.js';
        }
        if (format === 'umd') {
          return 'index.umd.cjs';
        }
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom', 'tailwindcss', 'class-variance-authority', 'clsx', 'tailwind-merge', 'lucide-react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'tailwindcss': 'tailwindcss',
          'class-variance-authority': 'classVarianceAuthority',
          'clsx': 'clsx',
          'tailwind-merge': 'tailwindMerge',
          'lucide-react': 'lucideReact',
        },
      },
    },
  }
})
