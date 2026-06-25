// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 3000
  },
  routeRules: {
    // 为了SEO目的，在构建时生成
    '/': { prerender: true },
    // 缓存1小时
    '/api/*': { cache: { maxAge: 60 * 60 } },
    // 重定向以避免404
    '/old-page': {
      redirect: { to:'/new-page', statusCode: 302}
    }
    // ...
  },
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api'
    }
  },
  css: ['./assets/styles/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {
        resolve(id: string) {
          // 让 tailwindcss 和 nuxt/ui 的 @import 交给 Tailwind 自己处理
          if (id === 'tailwindcss' || id === '@nuxt/ui') {
            return false
          }
        }
      },
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: ` 
            @use "@/assets/styles/variable.scss" as *;
            @use "@/assets/styles/index.scss" as *;
            @use "@/assets/styles/mixin.scss" as *;
          `
        }
      }
    }
  },
  //页面过渡效果 真的所有页面
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    'my-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    '@hypernym/nuxt-gsap',
  ],
  sourcemap: {
    server: true,
    client: true
  },
})