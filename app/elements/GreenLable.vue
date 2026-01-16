<script setup lang='ts'>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const lightRef = ref()

const PRIMARY_COLOR = '209, 248, 1';

const timeline = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power1.inOut",
    },
    repeat: -1,
    yoyo: true,
    paused: true,
});

onMounted(() => {
    if (!lightRef.value) return;
    startAnimation(timeline);

    ScrollTrigger.create({
        scroller: '.js-scroll-content',
        trigger: lightRef.value,
        onEnter: () => timeline.play(),
        onLeave: () => timeline.pause(),
        onEnterBack: () => timeline.play(),
        onLeaveBack: () => timeline.pause(),
    });
});

function startAnimation(tl: GSAPTimeline) {
    tl.fromTo(lightRef.value, {
        boxShadow: `0px 0px 0 0 rgba(${PRIMARY_COLOR},1)`,
    }, {
        boxShadow: `0px 0px 10px 2px rgba(${PRIMARY_COLOR},1)`,
    });
}
</script>

<template>
    <div class="green-lable">
        <div ref="lightRef" class="green-lable__light"></div>
        <span>Принимаю заказы</span>
    </div>
</template>

<style lang='scss'>
.green-lable {
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

    &__light {
        display: block;
        background-color: $primary;
        border-radius: 50%;
        width: 8px;
        height: 8px;
    }
}
</style>