<template lang="pug">
c-showcase-box(path="pure-draggable/basic-usage")
    el-button(
        @click="reset()"
    )
        |reset position
    br
    br
    .container
        .draggable(
            ref="ref_draggable"
            @mousedown="removeSmoothEffect()"
        )
            |drag me
</template>



<script setup lang="ts">
const ref_draggable = ref() as { value: HTMLElement }

function reset()
{
    ref_draggable.value.classList.add('o-smooth')
    ref_draggable.value.style.top = '0px'
    ref_draggable.value.style.left = '0px'
}

function removeSmoothEffect()
{
    ref_draggable.value.classList.remove('o-smooth')
}

onMounted(() => {
    nextTick(() => {
        pureDraggable(ref_draggable.value)
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="pure-draggable/basic-usage"]
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
