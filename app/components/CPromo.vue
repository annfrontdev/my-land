<script setup lang='ts'>
import { gsap } from "gsap";
import AppButton from '~/elements/AppButton.vue';
import GreenLable from "~/elements/GreenLable.vue";
</script>

<template>
    <div class="promo">
        <div>
            <GreenLable />
            <h1>Frontend <br /> разработчик</h1>
            <p>Работала в компаниях и на фрилансе, делала лендинги и многостраничные сайты с разным функционалом.
                Предоставляю услуги создания лендингов под ключ: создам, предоставлю дизайн, настрою для отображения в
                интернете.</p>

            <AppButton variant="primary" class="promo__connect">Связаться</AppButton>
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
        margin-bottom: 2rem;
    }

    p {
        color: $text-body;
        line-height: 120%;
    }

    &__connect {
        width: 260px;
    }
}
</style>