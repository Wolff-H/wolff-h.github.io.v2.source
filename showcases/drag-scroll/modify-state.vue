<template lang="pug">
c-showcase-box(path="drag-scroll/modify-state")
    .buttons
        el-button(
            @click="setScale_1_1()"
        )
            |set scale 1:1
        el-button(
            @click="setScale_25_25()"
        )
            |set scale 25:25
        el-button(
            @click="disable()"
        )
            |disable
        el-button(
            @click="distroy()"
        )
            |destroy
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

function setScale_1_1()
{
    dragScroll(ref_draggable.value!, ref_scrollable.value!)
}

function setScale_25_25()
{
    dragScroll(ref_draggable.value!, ref_scrollable.value!, {
        movement: { x: [25, 25], y: [25, 25] },
    })
}

function disable()
{
    dragScroll(ref_draggable.value!, ref_scrollable.value!, {
        movement: { x: [0, 0], y: [0, 0] },
    })
}

function distroy()
{
    dragScroll(ref_draggable.value!, null)    // 清除draggable下的所有scrollable
}

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_draggable.value!, ref_scrollable.value!)
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/modify-state"]
    .container
        display inline-block
        width 480px
        height 360px
        overflow auto
    .buttons
        margin-bottom 16px
</style>
