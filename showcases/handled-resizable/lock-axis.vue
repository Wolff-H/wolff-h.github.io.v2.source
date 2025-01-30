<template lang="pug">
c-showcase-box(path="handled-resizable/lock-axis")
    p
        |lock x-axis.
    .resizable(
        ref="ref_resizable"
    )
        .handle(
            ref="ref_handle"
        )
    p
        |lock y-axis.
    .resizable(
        ref="ref_resizable_1"
    )
        .handle(
            ref="ref_handle_1"
        )
</template>



<script setup lang="ts">
const ref_resizable = ref<HTMLElement>()
const ref_handle = ref<HTMLElement>()
const ref_resizable_1 = ref<HTMLElement>()
const ref_handle_1 = ref<HTMLElement>()


onMounted(() => {
    nextTick(() => {
        handledResizable(ref_handle.value!, ref_resizable.value!, {
            movement: { y: 0 },
        })
        handledResizable(ref_handle_1.value!, ref_resizable_1.value!, {
            movement: { x: 0 },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="handled-resizable/lock-axis"]
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
