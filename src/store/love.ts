import { defineStore } from 'pinia'
import { ref } from 'vue'
const useLoveStore = defineStore('love', () => {
    const love = ref<number>(888)
    return {
        love,
    }
})
export default useLoveStore