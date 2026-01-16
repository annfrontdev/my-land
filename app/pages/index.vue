<script setup lang='ts'>
</script>

<template>
    <div class="main-page">
        <ShortProfile />
        <div class="main-page__content js-scroll-content">
            <CPromo />
            <CServices />
            <LatestWork />
            <CReviews />
            <CContacts />
            <MainFooter />
        </div>
    </div>
</template>

<style lang='scss'>
.main-page {
    display: grid;
    grid-template-columns: 400px 1fr;
    height: 100vh;
    overflow: hidden;

    &__content {
        overflow: auto;
        padding: 16px;
    }
}
</style>