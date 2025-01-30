<template lang="pug">
c-showcase-box(path="drag-scroll/lock-axis")
    p
        |Lock x-axis.
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
        |Lock y-axis.
    .container(
        ref="ref_scrollable_1"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_1"
        )
</template>



<script setup lang="ts">
const ref_draggable = ref<HTMLElement>()
const ref_scrollable = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_draggable.value!, ref_scrollable.value!, {
            movement: { y: [0, 0] },
        })
        dragScroll(ref_draggable.value!, ref_scrollable.value!, {
            movement: { x: [0, 0] },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/lock-axis"]
    .container
        display inline-block
        width 600px
        height 450px
        overflow auto
</style>
