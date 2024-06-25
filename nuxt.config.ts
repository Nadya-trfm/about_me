// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app:{
        baseURL: "/about_me/",
    },
    alias: {
        assets: "/<rootDir>/assets",
    },
    css: [
        "~/assets/scss/main.scss"
    ]
})
