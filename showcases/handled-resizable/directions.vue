<template lang="pug">
c-showcase-box(path="handled-resizable/directions")
    .container
        .resizable-3(
            ref="ref_r_3"
        )
            .resizable-handle-3(
                ref="ref_rh_3"
            )
        .resizable-4(
            ref="ref_r_4"
        )
            .resizable-handle-4(
                ref="ref_rh_4"
            )
        .resizable-5(
            ref="ref_r_5"
        )
            .resizable-handle-5(
                ref="ref_rh_5"
            )
        .resizable-6(
            ref="ref_r_6"
        )
            .resizable-handle-6(
                ref="ref_rh_6"
            )
</template>



<script setup lang="ts">
const ref_r_3 = ref<HTMLElement>()
const ref_rh_3 = ref<HTMLElement>()
const ref_r_4 = ref<HTMLElement>()
const ref_rh_4 = ref<HTMLElement>()
const ref_r_5 = ref<HTMLElement>()
const ref_rh_5 = ref<HTMLElement>()
const ref_r_6 = ref<HTMLElement>()
const ref_rh_6 = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        handledResizable(ref_rh_3.value!, ref_r_3.value!, {
            movement: { x: 1, y: 1 },
        })
        handledResizable(ref_rh_4.value!, ref_r_4.value!, {
            movement: { x: -1, y: 1 },
        })
        handledResizable(ref_rh_5.value!, ref_r_5.value!, {
            movement: { x: -1, y: -1 },
        })
        handledResizable(ref_rh_6.value!, ref_r_6.value!, {
            movement: { x: 1, y: -1 },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="handled-resizable/directions"]
    .container
        position relative
        width 580px
        height 580px
        border 4px solid $black05
        .resizable-3, .resizable-4, .resizable-5, .resizable-6
            position absolute
            min-width 128px
            min-height 128px
            max-width 282px
            max-height 282px
            border 1px solid $black50
            background-color $black05
        .resizable-handle-3, .resizable-handle-4, .resizable-handle-5, .resizable-handle-6
            position absolute
            width 9px
            height 9px
            background-color $shadow10
        .resizable-3
            top 0px
            left 0px
        .resizable-4
            top 0px
            right 0px
        .resizable-5
            right 0px
            bottom 0px
        .resizable-6
            bottom 0px
            left 0px
        .resizable-handle-3
            right -5px
            bottom -5px
            cursor nwse-resize
        .resizable-handle-4
            bottom -5px
            left -5px
            cursor nesw-resize
        .resizable-handle-5
            top -5px
            left -5px
            cursor nwse-resize
        .resizable-handle-6
            top -5px
            right -5px
            cursor nesw-resize
</style>
