<template lang="pug">
c-showcase-box(path="drag-scroll/sensitivity")
    p
        |Normal: For the example below, 1px drag triggers 1px scroll.
    .container(
        ref="ref_scrollable"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable"
        )
    .ruler-container(
            ref="ref_ruler_scrollable"
        )
            .ruler-element(
                ref="ref_ruler_draggable"
            )
                span(
                    v-for="n in 20"
                    :key="n"
                )
                    |{{   n   }}
    p
        |Less sensitive: For the example below, 5px drag triggers 1px scroll.
    .container(
        ref="ref_scrollable_1"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_1"
        )
    .ruler-container(
        ref="ref_ruler_scrollable_1"
    )
        .ruler-element(
            ref="ref_ruler_draggable_1"
        )
            span(
                v-for="n in 20"
                :key="n"
            )
                |{{   n   }}
    p
        |More sensitive: For the example below, 1px drag triggers 5px scroll.
    .container(
        ref="ref_scrollable_2"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_2"
        )
    .ruler-container(
        ref="ref_ruler_scrollable_2"
    )
        .ruler-element(
            ref="ref_ruler_draggable_2"
        )
            span(
                v-for="n in 20"
                :key="n"
            )
                |{{   n   }}
    p
        |Scaled sensitive: For the example below, 10px drag triggers 10px scroll.
    .container(
        ref="ref_scrollable_3"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_3"
        )
    .ruler-container(
        ref="ref_ruler_scrollable_3"
    )
        .ruler-element(
            ref="ref_ruler_draggable_3"
        )
            span(
                v-for="n in 20"
                :key="n"
            )
                |{{   n   }}
</template>



<script setup lang="ts">
const ref_draggable = ref<HTMLElement>()
const ref_scrollable = ref<HTMLElement>()
const ref_ruler_draggable = ref<HTMLElement>()
const ref_ruler_scrollable = ref<HTMLElement>()
const ref_draggable_1 = ref<HTMLElement>()
const ref_scrollable_1 = ref<HTMLElement>()
const ref_ruler_draggable_1 = ref<HTMLElement>()
const ref_ruler_scrollable_1 = ref<HTMLElement>()
const ref_draggable_2 = ref<HTMLElement>()
const ref_scrollable_2 = ref<HTMLElement>()
const ref_ruler_draggable_2 = ref<HTMLElement>()
const ref_ruler_scrollable_2 = ref<HTMLElement>()
const ref_draggable_3 = ref<HTMLElement>()
const ref_scrollable_3 = ref<HTMLElement>()
const ref_ruler_draggable_3 = ref<HTMLElement>()
const ref_ruler_scrollable_3 = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_draggable.value!, ref_scrollable.value!)
        dragScroll(ref_ruler_draggable.value!, ref_ruler_scrollable.value!, {
            movement: { y: [0, 0] },
        })
        dragScroll(ref_draggable_1.value!, ref_scrollable_1.value!, {
            movement: { x: [5, 1], y: [5, 1] },
        })
        dragScroll(ref_ruler_draggable_1.value!, ref_ruler_scrollable_1.value!, {
            movement: { x: [5, 1], y: [0, 0] },
        })
        dragScroll(ref_draggable_2.value!, ref_scrollable_2.value!, {
            movement: { x: [1, 5], y: [1, 5] },
        })
        dragScroll(ref_ruler_draggable_2.value!, ref_ruler_scrollable_2.value!, {
            movement: { x: [1, 5], y: [0, 0] },
        })
        dragScroll(ref_draggable_3.value!, ref_scrollable_3.value!, {
            movement: { x: [10, 10], y: [10, 10] },
        })
        dragScroll(ref_ruler_draggable_3.value!, ref_ruler_scrollable_3.value!, {
            movement: { x: [10, 10], y: [0, 0] },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/sensitivity"]
    .container
        display inline-block
        width 480px
        height 360px
        overflow auto
</style>
