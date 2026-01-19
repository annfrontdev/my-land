import { defineStore } from "pinia"

export const usePopupStore = defineStore('popup', () => {
    const isOpen = ref(false)

    function openPopup() {
        isOpen.value = true
        console.log('openPopup');
        
    }

    function closePopup() {
        isOpen.value = false
    }

    return { openPopup, closePopup, isOpen }
})