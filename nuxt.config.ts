import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@tailvue/nuxt',
    'nuxt-bezier',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@pinia/colada-nuxt',
    '@tresjs/nuxt',
    'v-gsap-nuxt',
  ],
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    logto: {
      endpoint: 'https://logto.aplix.nl/',
      appId: '7e3mstcqvziu14bnpuvkt',
      appSecret: 'BAHweu7xoWitIj92cWAiTCIo1i57tgDe',
      cookieEncryptionKey: 'nwTUR4Ybsqhouq00v6WksEEAkUD1YYng', // Random-generated
    },
  },
  colorMode: {
    classSuffix: ''
  },
  nuxtBezier: {
    prefix: 'Prefix',
    components: ['FadeTransition']
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  logto: {
    pathnames: {
      signIn: '/auth/login',
      signOut: '/auth/logout',
      callback: '/auth/callback',
    },
  },
})