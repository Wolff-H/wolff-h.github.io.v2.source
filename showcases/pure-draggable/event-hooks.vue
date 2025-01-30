<template lang="pug">
c-showcase-box(path="pure-draggable/event-hooks")
    el-button(
        @click="reset()"
    )
        |reset
    br
    br
    .container
        .draggable(
            ref="ref_draggable"
            @mousedown="removeSmoothEffect()"
        )
            |{{   info   }}
</template>



<script setup lang="ts">
const ref_draggable = ref() as { value: HTMLElement }
const info = ref('')

function reset()
{
    ref_draggable.value.classList.add('o-smooth')
    ref_draggable.value.style.top = '0px'
    ref_draggable.value.style.left = '0px'
    info.value = ''
}

function removeSmoothEffect()
{
    ref_draggable.value.classList.remove('o-smooth')
}

onMounted(() => {
    nextTick(() => {
        pureDraggable(ref_draggable.value, {
            hooks:
            {
                dragStart: () => {
                    info.value = 'drag starts'
                },
                drag: (_event, draggable) => {
                    info.value = `[${draggable.style.left}, ${draggable.style.top}]`
                },
                dragEnd: () => {
                    info.value = 'drag ends'
                },
            }
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="pure-draggable/event-hooks"]
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
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03
            user-select none
            cursor move
</style>
