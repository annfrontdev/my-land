<script setup lang='ts'>
defineEmits(['closePopup'])
</script>

<template>
    <div class="popup">
        <div @click="$emit('closePopup')" class="popup__overlay"></div>

        <div class="popup__content">
            <button @click="$emit('closePopup')" type="button" class="popup__closer">
                <Icon name="mdi:close" />
            </button>
            <div class="popup__wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.popup {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__closer {
        background-color: transparent;
        color: $primary;
        font-size: 2rem;
        border: none;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0;
        left: 100%;
        transition: all 0.2s;
        z-index: 102;

        &:hover {
            filter: drop-shadow(0 0 10px $primary);
        }
    }


    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($light-bg, 0.8);
    }

    &__content {
        position: relative;
        z-index: 101;
        width: auto;
        height: 90%;
        max-width: 90%;
        scrollbar-width: 2px;

        background-color: $light-bg;
        border: 1px solid $primary;
        overflow-y: auto;
        box-shadow: 0 0 4px 0 $primary;
        // display: flex;
        // flex-direction: column;
        scrollbar-color: $light-bg $primary;
    }

    &__wrapper {
        position: relative;
        flex-grow: 1;
        padding: 2rem 4rem;
        scrollbar-color: $light-bg $primary;
    }
}
</style>