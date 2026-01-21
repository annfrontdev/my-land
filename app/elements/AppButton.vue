<script setup lang='ts'>
type Variant = 'primary' | 'secondary'

type Props = {
    variant: Variant
}

defineProps<Props>()
</script>

<template>
    <button type="button" class="app-button" :class="variant">
        <slot></slot>
    </button>
</template>

<style lang='scss'>
.app-button {
    background-color: transparent;
    font-size: 24px;
    line-height: 31px;
    height: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 1rem;
    transition: all 0.3s;
    border: 2px solid $primary;
    color: $black;

    &.primary {
        background-color: $primary;
    }

    &.secondary {
        color: $primary;
    }

    &:hover {
        &.primary {
            border: 2px solid $primary;
            color: $primary;
            background-color: transparent;
        }

        &.secondary {
            background-color: $primary;
            color: $black;
        }
    }
}
</style>