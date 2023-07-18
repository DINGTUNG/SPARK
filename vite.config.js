import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/style.scss";`,
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    }
  },
  //發生問題回報
  base: "/SPARK/",

  //swiper使用
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // 將所有帶 swiper- 的標籤名都視為自定義元素
          isCustomElement: tag => tag.startsWith('swiper-')
        }
      }))
  }
})