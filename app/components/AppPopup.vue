<script setup lang='ts'>
defineEmits(['closePopup'])
</script>

<template>
    <div class="popup">
        <div @click="$emit('closePopup')" class="popup__overlay"></div>
        <div class="popup__content">
            <button @click="$emit('closePopup')"  type="button" class="popup__closer">
                <Icon name="mdi:close" />
            </button>
            <div>
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
        justify-self: flex-end;
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
        overflow: auto;
        scrollbar-color: $light-bg $primary;
        background-color: $light-bg;
        border: 1px solid $primary;
        padding: 1rem;
    }
}
</style>