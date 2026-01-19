<script setup lang='ts'>
import AppButton from '~/elements/AppButton.vue';
import { contacts } from '~/info';

</script>

<template>
    <div class="short-profile">
        <div class="short-profile__avatar">
            <NuxtImg format="webp" src="/avatar.jpg" quality="90" />
        </div>

        <div class="short-profile__info">
            <div class="short-profile__author">
                <div>Анна Серова</div>
                <div class="short-profile__role">Frontend разработчик</div>
            </div>

            <div class="short-profile__text">
                <Icon name="mdi:map-marker" />{{ contacts.city }}
            </div>
            <div class="short-profile__text">
                <Icon name="mdi:gmail" />
                <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
            </div>
            <div class="short-profile__text">
                <Icon name="mdi:phone" />
                <a :href="`tel:${contacts.phone}`"> {{ contacts.phone }}</a>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.short-profile {
    padding: 8px;
    min-height: 0;
    display: grid;
    grid-template-rows: 1fr max-content;
    max-height: 100vh;
    padding: 16px;

    img {
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 100%;
    }

    &__cv {
        margin-top: 2rem;

        button {
            font-size: 1rem;
            height: 40px;
            padding: 8px;
            width: 100%;
        }
    }

    &__avatar {
        overflow: hidden;
    }

    &__info {
        background-color: $light-bg;
        padding: 2rem 8px;
        box-sizing: border-box;
        min-height: 0;
    }

    &__author {
        margin-bottom: 23px;
        font-size: 1.5rem;
    }

    &__role {
        color: $primary;
        margin-top: 6px;
        font-size: 1rem;
    }

    &__text {
        color: $text-body;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s;
        margin: 12px 0;

        &:hover {
            color: $primary;
        }

        a {
            color: inherit;
            text-decoration: none;

        }
    }
}
</style>