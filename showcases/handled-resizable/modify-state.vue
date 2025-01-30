<template lang="pug">
c-showcase-box(path="handled-resizable/modify-state")
    el-button(@click="lockX")
        |lock on x-axis
    el-button(@click="lockY")
        |lock on y-axis
    el-button(@click="unlock")
        |unlock axes
    br
    br
    .resizable-1(
        ref="ref_r_1"
    )
        |resizable on:
        br
        |{{   resizable_directions   }}
        .resizable-handle-1(
            ref="ref_rh_1"
        )
    br
    br
    el-button(@click="disable")
        |disable resizable
    el-button(@click="enable")
        |enable resizable
    br
    br
    .resizable-2(
        ref="ref_r_2"
    )
        .resizable-handle-2(
            ref="ref_rh_2"
        )
</template>



<script setup lang="ts">
const ref_r_1 = ref<HTMLElement>()
const ref_rh_1 = ref<HTMLElement>()
const ref_r_2 = ref<HTMLElement>()
const ref_rh_2 = ref<HTMLElement>()
const resizable_directions = ref(['x', 'y'])

function lockX()
{
    handledResizable(ref_rh_1.value!, ref_r_1.value!, {
        movement: { y: 0 },
    })
    resizable_directions.value = ['x']
}
function lockY()
{
    handledResizable(ref_rh_1.value!, ref_r_1.value!, {
        movement: { x: 0 },
    })
    resizable_directions.value = ['y']
}
function unlock()
{
    handledResizable(ref_rh_1.value!, ref_r_1.value!)
    resizable_directions.value = ['x', 'y']
}

function disable()
{
    handledResizable(ref_rh_2.value!, ref_r_2.value!, {
        movement: { x: 0, y: 0 },
    })
}

function enable()
{
    handledResizable(ref_rh_2.value!, ref_r_2.value!)
}

onMounted(() => {
    nextTick(() => {
        handledResizable(ref_rh_1.value!, ref_r_1.value!)
        handledResizable(ref_rh_2.value!, ref_r_2.value!)
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="handled-resizable/modify-state"]
    .resizable-1, .resizable-2
        display inline-flex
        position relative
        min-width 128px
        min-height 128px
        justify-content center
        align-items center
        border 1px solid $black50
        background-color $black05

        .resizable-handle-1, .resizable-handle-2
            position absolute
            right -4px
            bottom -4px
            width 8px
            height 8px
            background-color $shadow10
            cursor nwse-resize
</style>
