<script setup lang='ts'>
import AppButton from '~/elements/AppButton.vue';
</script>

<template>
    <div class="promo">
        <div>
            <div class="promo__available">
                <span>Принимаю заказы</span>
            </div>
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

    &__available {
        border: 2px solid $line;
        width: 260px;
        text-align: center;
        padding: 16px;
        border-radius: 32px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        &::after {
            order: -1;
            position: static;
            display: block;
            background-color: $primary;
            content: "";
            border-radius: 50%;
            width: 8px;
            height: 8px;
            box-shadow: 0 0 0 1px rgba($primary, 0.2);
        }
    }
}
</style>