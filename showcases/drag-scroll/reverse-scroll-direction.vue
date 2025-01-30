<template lang="pug">
c-showcase-box(path="drag-scroll/reverse-scroll-direction")
    p
        |Reverse x-axis.
    .container(
        ref="ref_scrollable"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable"
        )
    p
        |Reverse y-axis.
    .container(
        ref="ref_scrollable_1"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_1"
        )
    p
        |Reverse both x-axis and y-axis.
    .container(
        ref="ref_scrollable_2"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_2"
        )
</template>



<script setup lang="ts">
const ref_draggable = ref<HTMLElement>()
const ref_scrollable = ref<HTMLElement>()
const ref_draggable_1 = ref<HTMLElement>()
const ref_scrollable_1 = ref<HTMLElement>()
const ref_draggable_2 = ref<HTMLElement>()
const ref_scrollable_2 = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_draggable.value!, ref_scrollable.value!)
        dragScroll(ref_draggable_1.value!, ref_scrollable_1.value!, { movement: { y: [1, -1] } })
        dragScroll(ref_draggable_2.value!, ref_scrollable_2.value!, { movement: { x: [1, -1], y: [1, -1] } })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/reverse-scroll-direction"]
    .container
        display inline-block
        width 480px
        height 360px
        overflow auto
</style>
