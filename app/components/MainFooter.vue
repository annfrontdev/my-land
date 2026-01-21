<script setup lang='ts'>
</script>

<template>
    <footer class="main-footer">
        <span>© 2026 Анна Серова</span>
    </footer>
</template>

<style lang='scss'>
.main-footer {
    padding: 3rem 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    font-weight: lighter;

    @media (max-width: $mobile) {
        justify-content: center;
    }
}
</style>