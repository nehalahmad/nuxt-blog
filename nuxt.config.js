const bodyParser = require("body-parser");

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@assets/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@plugins/core-components.js", "@plugins/date-filter.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: process.env.BASE_URL || "https://nuxt-blog-a7b71.firebaseio.com/"
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  env: {
    baseUrl: process.env.BASE_URL || "https://nuxt-blog-a7b71.firebaseio.com/",
    fbApiKey: "AIzaSyCHZgR7a5vcJ8vEGkBSumCuV6H9k5yZo2k",
    localhost: "http://localhost:3000"
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "*",
        component: resolve(__dirname, "pages/index.vue")
      });
    }
  },
  transition: { name: "fade", mode: "out-in" },
  serverMiddleware: [bodyParser.json(), "@api"]
};
