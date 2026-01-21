<script setup lang='ts'>
import { usePopupStore } from '~/stores/popupStore';
const store = usePopupStore()
const { isOpen } = storeToRefs(store)
const { closePopup } = store
</script>

<template>
    <div class="main-page">
        <ShortProfile class="main-page__short-profile" />
        <div class="main-page__content js-scroll-content">
            <CPromo />
            <CServices />
            <LatestWork />
            <CReviews />
            <CContacts />
            <MainFooter />
        </div>

        <CVPopup v-if="isOpen" @closePopup="closePopup" />
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

    @media (max-width: $tablet) {
        grid-template-columns: 1fr;
        overflow-y: auto;
        height: auto;

        &__short-profile {
            display: none;
        }
    }
}
</style>