
export default defineNuxtConfig({
    app:{
        baseURL: "/about_me/",
    },
    alias: {
        assets: "/<rootDir>/assets",
    },
    css: [
        "~/assets/scss/main.scss"
    ],
    modules: [[
        '@pinia/nuxt',
        {
            autoImports: ["defineStore"]
        }
    ]],
    imports:{
        dirs: ["./stores"]
    }
})
