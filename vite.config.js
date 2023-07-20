import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/style.scss";`,
      },
    },
    devSourcemap: true,
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
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
  server: {
    watch: {
      usePolling: true,
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