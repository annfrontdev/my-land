<script setup lang='ts'>
const services = [
    {
        id: 1,
        title: 'Лендинг под ключ',
        description: 'Для продукта, услуги или события, готовые к запуску.',
    },
    {
        id: 2,
        title: 'Сайты на Tilda',
        description: 'Использую Zero блоки, дорабатываю базовые компоненты.',
    },
    {
        id: 3,
        title: 'Доработка сайтов',
        description: 'Подключаю формы обратной связи и базовые платежи.',
    },
    {
        id: 4,
        title: 'Сайты на Shopify',
        description: 'Доработка шаблонов, кода и настройка админки сайта',
    },
];
</script>

<template>
    <div class="services">
        <h2>Мои услуги</h2>

        <ul>
            <li v-for="value in services">
                <span>0{{ value.id }}</span>

                <div>
                    <h3>{{ value.title }}</h3>
                    <p>{{ value.description }}</p>
                </div>

            </li>
        </ul>
    </div>
</template>

<style lang='scss'>
.services {
    @include section;

    h2 {
        @include section-title;
    }

    ul {
        @include reset-list;
        display: grid;
        gap: 12px;
    }

    li {
        padding: 12px 32px;
        background-color: $primary;
        color: $black;
        display: flex;
        align-items: center;
        gap: 32px;

        &>span {
            font-size: 3rem;
            line-height: 100%;
            font-weight: bold;
            min-width: 90px;
        }

        h3 {
            font-size: 2rem;
            line-height: 120%;
            margin: 0;
            font-weight: normal;
            margin-bottom: 8px;
        }

        p {
            margin: 0;
            font-size: 16px;
            font-weight: lighter;
        }
    }

    @media (max-width: $mobile) {
        li {
            padding: 8px;
            gap: 1rem;

            &>span {
                font-size: 2rem;
                min-width: 60px;
            }

            h3 {
                font-size: 1.5rem;
            }
        }
    }
}
</style>