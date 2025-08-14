// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
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
  css: [
    '~/assets/css/main.css'
  ],
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api'
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
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  //页面过渡效果 真的所有页面
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],
  sourcemap: {
    server: true,
    client: true
  },
})