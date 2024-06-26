import {defineStore} from "pinia";

export const useBackendItemsStore = defineStore({
    id: "backend-store",
    state: () => {
        return {
            backendItems: [
                'php',
                'laravel',
                'SQL',
                'MySQL'
            ]
        }
    },
})