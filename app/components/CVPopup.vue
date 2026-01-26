<script setup lang="ts">
import { contacts } from '~/info';

const aboutMe = `Frontend разработчик с коммерческим опытом в стартапах, веб-студии и фрилансе. Основной стек: Vue / Nuxt, также есть опыт работы с React. Работаю с лендингами, админками и e-commerce проектами. Практический опыт в разработке и поддержке существующих проектов, интеграции сторонних API и работе по ТЗ и макетам.`

const experience = [
    {
        title: 'Frontend-разработчик (BYSS Mobile, Польша)',
        period: '2022',
        tasks: [
            'Закрытие тикетов по верстке в существующем проекте на React.',
            'Разработка интернет-магазина с нуля.',
            'Интеграция стороннего API, купленного у внешнего подрядчика.',
            'Работа с кодовой базой без полноценного онбординга.'
        ]
    },
    {
        title: 'Frontend-разработчик (Эврика, Южно-сахалинск)',
        period: '2023-2024',
        tasks: [
            'Разработка админ - панели для образовательной платформы(Vue): журналы, дневники, отчёты.',
            'Реализация пользовательских интерфейсов и бизнес - логики.',
            'Реализация функционала с учётом ролей пользователей(права доступа, сценарии работы).',
            'Проработка интерфейсов совместно с backend - разработчиком(API, бизнес - логика).',
            'Участие в улучшении UX на основе обратной связи от пользователей.',
        ]
    },
    {
        title: 'Frontend-разработчик (Регул, Ростов)',
        period: '2025',
        tasks: [
            'Закрытие тикетов по верстке интернет-магазин Альпина.',
            'Разработка и поддержка лендингов на Nuxt 3.',
            'Выступление в роли спикера на презентациях для компании-заказчика.'
        ]
    },
    {
        title: 'Frontend-разработчик (Фриланс)',
        period: 'на текущий момент',
        tasks: [
            'Разработка лендингов на Nuxt.',
            'Создание сайтов на Tilda (Zero Block), кастомизация и доработка существующих элементов.',
            'Работа с Shopify: кастомизация storefront, настройка админки, работа с контентом.'
        ]
    }
];

const skills = [
    'Vue 2 / Vue 3 / Nuxt 3',
    'TypeScript',
    'React (коммерческий опыт)',
    'REST API',
    'Git',
    'Tailwind',
    'Работа по макетам Figma'
];
</script>

<template>
    <AppPopup class="cv">
        <h2>Анна Серова</h2>
        <p>Frontend разработчик</p>

        <section class="cv__contacts">
            <h3>Контакты</h3>
            <a :href="`mailto:${contacts.email}`" class="link">{{ contacts.email }}</a>
            <a :href="`tel:${contacts.phone}`" class="link"> {{ contacts.phone }}</a>
            <span>{{ contacts.city }}</span>
        </section>


        <section>
            <h3>Обо мне</h3>
            <p>{{ aboutMe }}</p>
        </section>

        <section>
            <h3>Опыт</h3>
            <div v-for="(job, index) in experience" :key="index">
                <h4>{{ job.title }} — <em>{{ job.period }}</em></h4>
                <ul>
                    <li v-for="(task, i) in job.tasks" :key="i">{{ task }}</li>
                </ul>
            </div>
        </section>

        <section>
            <h3>Навыки</h3>
            <ul>
                <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
            </ul>
        </section>
    </AppPopup>
</template>

<style lang="scss">
.cv {

    h2,
    h3,
    h4 {
        color: $primary;
    }

    h2,
    h2+p {
        text-transform: uppercase;
    }

    p,
    li {
        line-height: 150%;
        font-weight: lighter;
    }


    section {
        margin: 3rem 0;
    }

    &__contacts {
        display: grid;
        gap: 8px;
        font-weight: lighter;
    }
}
</style>
