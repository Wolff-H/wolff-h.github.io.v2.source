<template lang="pug">
c-showcase-box(path="pure-draggable/handles-and-avoidance")
    el-button(
        @click="reset()"
    )
        |reset position
    span.hint
        |drag on those light green handles.
    br
    br
    .container
        .draggable(
            ref="ref_draggable"
            @mousedown="removeSmoothEffect()"
        )
            .handle.left(ref="ref_handle_left")
            .handle.right(ref="ref_handle_right")
    br
    el-button(
        @click="reset_1()"
    )
        |reset position
    span.hint
        |drag on the div but avoid those light red patches.
    br
    br
    .container
        .draggable.draggable-1(
            ref="ref_draggable_1"
            @mousedown="removeSmoothEffect_1()"
        )
            .ban.ban-1(ref="ref_ban_1")
            .ban.ban-2(ref="ref_ban_2")
            .ban.ban-3(ref="ref_ban_3")
            .ban.ban-4(ref="ref_ban_4")
            .ban.ban-5(ref="ref_ban_5")
</template>



<script setup lang="ts">
const ref_draggable = ref<HTMLElement>()
const ref_handle_left = ref<HTMLElement>()
const ref_handle_right = ref<HTMLElement>()
const ref_draggable_1 = ref<HTMLElement>()
const ref_ban_1 = ref<HTMLElement>()
const ref_ban_2 = ref<HTMLElement>()
const ref_ban_3 = ref<HTMLElement>()
const ref_ban_4 = ref<HTMLElement>()
const ref_ban_5 = ref<HTMLElement>()

function reset()
{
    ref_draggable.value!.classList.add('o-smooth')
    ref_draggable.value!.style.top = '0px'
    ref_draggable.value!.style.left = '0px'
}

function removeSmoothEffect()
{
    ref_draggable.value!.classList.remove('o-smooth')
}

function reset_1()
{
    ref_draggable_1.value!.classList.add('o-smooth')
    ref_draggable_1.value!.style.top = '0px'
    ref_draggable_1.value!.style.left = '0px'
}

function removeSmoothEffect_1()
{
    ref_draggable_1.value!.classList.remove('o-smooth')
}

onMounted(() => {
    nextTick(() => {
        pureDraggable(ref_draggable.value!, {
            handles: [ref_handle_left.value!, ref_handle_right.value!]
        })
        pureDraggable(ref_draggable_1.value!, {
            avoid: [ref_ban_1.value!, ref_ban_2.value!, ref_ban_3.value!, ref_ban_4.value!, ref_ban_5.value!]
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="pure-draggable/handles-and-avoidance"]
    span.hint
        color $black40
        padding-left 16px
    .draggable.o-smooth
        transition top 0.67s, left 0.67s
    .container
        width 640px
        height 480px
        overflow hidden
        border 4px solid $black05
        .draggable
            display flex
            position relative
            width 120px
            height 80px
            justify-content space-between
            align-items center
            border 1px solid $black40
            background-color $black03
            user-select none
            .handle
                background-color $green70
                opacity 0.2
                height 100%
                width 20px
        .draggable-1
            position relative
            width 120px
            height 80px
            border 1px solid $black40
            background-color $black03
            user-select none
            .ban
                position absolute
                background-color $red60
                opacity 0.2
            .ban-1
                height 56px
                width 32px
                top 12px
                left 12px
            .ban-2
                height 8px
                width 64px
                top 12px
                right 0px
            .ban-3
                height 32px
                width 12px
                bottom 12px
                right 0px
            .ban-4
                height 24px
                width 12px
                bottom 12px
                right 20px
            .ban-5
                height 16px
                width 12px
                bottom 12px
                right 40px
</style>
