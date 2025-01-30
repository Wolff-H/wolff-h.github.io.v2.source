<template lang="pug">
c-showcase-box(path="stick-element/basic-usage")
    .container(
        ref="ref_container"
    )
        .sticker(
            ref="ref_sticker"
        )
            |sticker1
        .padding-x
            - for (let i = 1; i <= 20; i++)
                |· · · · · · #{i} 
        .sticker-1(
            ref="ref_sticker_1"
        )
            |sticker2
        .padding-y
            - for (let i = 1; i <= 20; i++)
                |· · · · · · #{i} 
</template>



<script setup lang="ts">
const ref_container = ref<HTMLElement>()
const ref_sticker = ref<HTMLElement>()
const ref_sticker_1 = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        stickElement(ref_container.value!, ref_sticker.value!, {
            movement: { top: 0, left: 0 },
        })
        stickElement(ref_container.value!, ref_sticker_1.value!, {
            movement: { left: 50 },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="stick-element/basic-usage"]
    .container
        width: (600 + 2)px
        height: (450 + 2)px
        padding 50px
        overflow auto
        overflow auto
        border 1px solid black
        >.sticker
            display inline-flex
            position relative
            width 200px
            height 50px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03
        >.padding-x
            display inline-block
            width 1500px
            padding 10px 0px
        >.sticker-1
            display inline-flex
            position relative
            width 50px
            height 200px
            padding 10px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03
            writing-mode vertical-lr
        .padding-y
            width 50px
            height 1500px
            writing-mode vertical-lr
</style>
