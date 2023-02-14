// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxt/image-edge"],
    build: {
        transpile: ['gsap'],
    },
    image: {
    domains: ["https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/"]
}})
