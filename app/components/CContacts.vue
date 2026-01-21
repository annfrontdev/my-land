<script setup lang='ts'>
</script>

<template>
    <div class="contacts">
        <h2>Расскажите мне про ваш проект</h2>

        <div>
            <div class="contacts__link">
                <span>Почта для связи</span>
                <a href="mailto:ann.frontend.job@gmail.com">ann.frontend.job@gmail.com</a>
            </div>

            <div class="contacts__link">
                <span> Если нужно обсудить голосом</span>
                <a href="tel:+79251468456">+79251468456</a>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.contacts {
    h2 {
        font-size: 3rem;
        line-height: 110%;
        font-weight: normal;
    }

    &__link {
        padding: 3rem 8px;
        display: grid;
        gap: 8px;
        border-bottom: 1px solid $line;

        span {
            color: $text-body;
            margin-bottom: 8px;
        }

        a {
            color: $white;
            font-size: 2rem;
        }
    }

    @media (max-width: $mobile) {
        h2 {
            font-size: 2rem;
        }

        &__link {
            a {
                font-size: 1.2rem;
            }
        }
    }
}
</style>