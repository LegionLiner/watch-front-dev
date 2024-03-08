// https://nuxt.com/docs/api/configuration/nuxt-config
const appURL = process.env.APP_URL ?? "https://localhost:3000";
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  modules: [
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      appURL: appURL,
      apiURL: 'https://watchinvest.relabs.ru/api/v1',
      mediaURL: 'https://watchinvest.relabs.ru/media',
    },
  },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    url: appURL,
  },
  routeRules: {
    "/api/v1/**": { proxy: `${'https://watchinvest.relabs.ru/api/v1'}/**` },
  },
  image: {
    providers: {
      custom: {
        name: "customProvider",
        provider: "~/providers/customProvider.ts",
        options: {
          baseURL: 'https://watchinvest.relabs.ru/media',
        },
      },
    },
    // provider: process.env.IMAGE_PROVIDER,
    // netlify: {
    //   baseURL: process.env.DOMAIN,
    // },
    // domains: [process.env.DOMAIN as string],
  },
});
