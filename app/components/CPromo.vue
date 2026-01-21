<script setup lang='ts'>
import { gsap } from "gsap";
import AppButton from '~/elements/AppButton.vue';
import GreenLabel from "~/elements/GreenLabel.vue";
const store = usePopupStore()
const { openPopup } = store

function scrollToContacts() {
    const contacts = document.querySelector('#js-contacts')
    contacts?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <div class="promo">
        <div>
            <GreenLabel />
            <h1>Frontend <br /> разработчик</h1>
            <p>Работала в компаниях и на фрилансе, делала лендинги и многостраничные сайты с разным функционалом.</p>
            <p> Предоставляю услуги создания лендингов под ключ: создам, предоставлю дизайн, настрою для отображения в
                интернете.</p>

            <div class="promo__btns">
                <AppButton variant="primary" @click="scrollToContacts">Связаться</AppButton>
                <AppButton variant="secondary" @click="openPopup">Резюме</AppButton>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.promo {
    padding-top: 8px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    h1 {
        font-size: 5rem;
        line-height: 120%;
        margin: 0;
        margin-bottom: 3rem;
    }

    p {
        color: $text-body;
        line-height: 120%;
    }

    &__btns {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
    }

    @media (max-width: $tablet) {
        @include section;
        margin-top: 0;
        height: auto;
    }

    @media (max-width: $mobile) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
            font-weight: lighter;
        }

        &__btns {
            display: grid;
        }
    }
}
</style>