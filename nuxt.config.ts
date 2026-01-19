// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['normalize.css/normalize.css', '~/styles/base.scss'],


  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/styles/_colors.scss" as *;@use "~/styles/_mixins.scss" as *;',
        },
      },
    },
  },

  modules: ['@nuxt/image', '@nuxt/icon', '@pinia/nuxt'],
})