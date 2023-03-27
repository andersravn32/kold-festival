// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      urlBase:
        "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxt/image-edge"],
  build: {
    transpile: ["gsap"],
  },
  image: {
    domains: [
      "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/",
    ],
    presets: {
      compress: {
        modifiers: {
          format: "webp",
          quality: "80",
          width: 500,
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
});
