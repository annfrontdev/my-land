<script setup lang='ts'>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
    { id: 1, author: 'Ангелина С.', text: `Работать с Анной комфортно и результативно. Все выполнено по ТЗ и в срок. Все пожелания учтены, правки вносятся без проблем. Из личных качеств могу особенно выделить Ответственность и коммуникабельность специалиста. Уже рекомендовала  Анну знакомым.` },
    { id: 2, author: 'Ангелина С.', text: `Работать с Анной комфортно и результативно. Все выполнено по ТЗ и в срок. Все пожелания учтены, правки вносятся без проблем. Из личных качеств могу особенно выделить Ответственность и коммуникабельность специалиста. Уже рекомендовала  Анну знакомым.` },
    { id: 3, author: 'Ангелина С.', text: `Работать с Анной комфортно и результативно. Все выполнено по ТЗ и в срок. Все пожелания учтены, правки вносятся без проблем. Из личных качеств могу особенно выделить Ответственность и коммуникабельность специалиста. Уже рекомендовала  Анну знакомым.` },
]

const trackRef = ref()
const reviewsRef = ref()

const timeline = gsap.timeline({ defaults: { duration: 10, repeat: -1 } })

onMounted(() => {
    if (!trackRef.value) return;
    timeline.pause()

    startAnimation(timeline, trackRef.value)

    ScrollTrigger.create({
        scroller: '.js-scroll-content',
        trigger: reviewsRef.value,
        onEnter: () => timeline.play(),
        onLeave: () => { timeline.pause() },
        onEnterBack: () => timeline.play(),
        onLeaveBack: () => timeline.pause(),
    });
})

function startAnimation(tl: GSAPTimeline, el: HTMLElement) {
    const width = el.scrollWidth / 2;

    tl.to(el, {
        duration: 20,
        ease: "linear",
        delay: 0,
        x: -width,
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % width)
        }
    })
}
</script>

<template>
    <div class="reviews" ref="reviewsRef">
        <h2>Отзывы</h2>
        <div class="reviews__list">
            <div ref="trackRef" class="reviews__track" @mouseenter="timeline.pause()" @mouseleave="timeline.resume()">
                <div v-for="value in REVIEWS" :key="value.id" class="reviews__item">
                    <div>
                        <Icon name="mdi:star" class="reviews__star" v-for="value in 5" :key="value" />
                    </div>
                    <p>{{ value.text }}</p>
                    <p>{{ value.author }}</p>
                </div>
                <div v-for="value in REVIEWS" :key="value.id + '-cloned'" class="reviews__item">
                    <div>
                        <Icon name="mdi:star" class="reviews__star" v-for="value in 5" :key="value" />
                    </div>
                    <p>{{ value.text }}</p>
                    <p>{{ value.author }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.reviews {
    @include section;

    p {
        line-height: 130%;
        font-weight: lighter;

        &:nth-of-type(2) {
            color: $text-body;
        }
    }

    &__star {
        color: $primary;
        font-size: 30px;
    }

    &__track {
        display: flex;
        gap: 1rem;
        width: 100%;
    }

    &__list {
        overflow: hidden;
    }

    &__item {
        border: 1px solid $line;
        padding: 1rem;
        min-width: 400px;
    }
}
</style>