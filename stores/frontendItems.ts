import {defineStore} from "pinia";

export const useFrontendItemsStore = defineStore({
    id: "frontend-store",
    state: () => {
        return {
            frontendItems: [
                'vue 2',
                'vue 3',
                'javascript',
                'typescript',
                'HTML',
                'CSS',
                'SASS(SCSS)',
                'vuex',
                'pinia',
                'nuxt',
                'jQuery'
            ]
        }
    },
})