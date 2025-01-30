<template lang="pug">
c-showcase-box(path="handled-resizable/basic-usage")
    .resizable(
        ref="ref_resizable"
    )
        |a resizable div
        .handle(
            ref="ref_handle"
            @dblclick="resetResizableSize()"
        )
</template>



<script setup lang="ts">
const ref_resizable = ref<HTMLElement>()
const ref_handle = ref<HTMLElement>()

function resetResizableSize()
{
    ref_resizable.value!.style.width = '128px'
    ref_resizable.value!.style.height = '128px'
}

onMounted(() => {
    nextTick(() => {
        handledResizable(ref_handle.value!, ref_resizable.value!)
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="handled-resizable/basic-usage"]
    .resizable
        display inline-flex
        position relative
        min-width 128px
        min-height 128px
        justify-content center
        align-items center
        border 1px solid $black50
        background-color $black05
        .handle
            position absolute
            right -4px
            bottom -4px
            width 8px
            height 8px
            background-color $shadow10
            cursor nwse-resize
</style>
