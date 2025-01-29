<template lang="pug">
c-showcase-box(path="drag-scroll/separate-element-and-container")
    .container(
        ref="ref_scrollable"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
        )
    .touchpad(
        ref="ref_draggable"
    )
</template>



<script setup lang="ts">
const ref_draggable = ref<HTMLElement>()
const ref_scrollable = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_draggable.value!, ref_scrollable.value!)
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/separate-element-and-container"]
    .container
        display inline-block
        width 600px
        height 450px
        overflow auto

    .touchpad
        margin-top 24px
        width 256px
        height 192px
        background-color $black20
</style>
