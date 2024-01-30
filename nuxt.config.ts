// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    mailtrap_api: process.env.MAILTRAP_API,
    mailtrap_token: process.env.MAILTRAP_API_TOKEN,
    hcaptcha_secret: process.env.HCAPTCHA_SECRET,
    public: {
      urlBase: process.env.URL_BASE,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'da'
      }
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxt/image-edge", '@zadigetvoltaire/nuxt-gtm'],
  build: {
    transpile: ["gsap"],
  },
  image: {
    domains: [`${process.env.URL_BASE}`],
    presets: {
      compress: {
        modifiers: {
          format: "webp",
          quality: "60",
          width: 300,
        },
      },
      compress2: {
        modifiers: {
          format: "webp",
          quality: "80",
          width: 1000,
        },
      },
    },
  },
  gtm: {
    id: 'GTM-K7MZ8GFW'
  }
});
