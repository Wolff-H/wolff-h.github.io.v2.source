<template lang="pug">
c-showcase-box(path="drag-scroll/swap-controls")
    .container(
        ref="ref_scrollable"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable"
        )
</template>



<script setup lang="ts">
const ref_draggable = ref<HTMLElement>()
const ref_scrollable = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_draggable.value!, ref_scrollable.value!, {
            movement: { swapped: true },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/swap-controls"]
    .container
        display inline-block
        width 480px
        height 360px
        overflow auto
</style>
