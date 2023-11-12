import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static-job-listings/',
  plugins: [vue(),
    copy({
      targets: [
        { src: 'src/assets/*', dest: 'dist/assets' },
      ],
      hook: 'writeBundle' // 確保檔案在寫入 bundle 之後被複製
    })]
  ,
})
