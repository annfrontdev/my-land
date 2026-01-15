<script setup lang='ts'>
const works = [
    { id: 1, title: 'Страница свечного мастера', description: 'Nuxt', screenshot: '/work-1.png' },
    { id: 2, title: 'Услуги для автомобилей', description: 'Tilda', screenshot: '/work-2.png' },
    { id: 3, title: 'Кухни на заказ', description: 'Tilda', screenshot: '/work-3.png' },
]
</script>

<template>
    <div class="latest-work">
        <h2>Мои Работы</h2>

        <ul>
            <li v-for="value in works" :key="value.id">
                <NuxtImg :src="value.screenshot" format="webp" quality="90" />

                <div class="latest-work__info">
                    <h3>{{ value.title }}</h3>
                    <p>{{ value.description }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang='scss'>
.latest-work {
    @include section;

    h2 {
        @include section-title;
    }

    ul {
        @include reset-list;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    li {
        border: 1px solid $line;

        img {
            height: 300px;
            width: 100%;
            display: block;
            object-fit: cover;
        }
    }

    &__info {
        background-color: $light-bg;
        padding: 16px;

        height: 80px;
        display: grid;
        align-items: center;

        p,
        h3 {
            margin: 0;
        }

        p {
            color: $primary;
            text-transform: uppercase;
            font-size: 14px;
        }

        h3 {
            font-weight: normal;
            font-size: 18px;
            line-height: 120%;
            margin-bottom: 8px;
        }
    }

}
</style>