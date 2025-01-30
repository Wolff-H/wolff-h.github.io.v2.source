<template lang="pug">
c-showcase-box(path="stick-element/cross-level-sticky")
    .container(ref="ref_container")
        table
            thead
                tr
                    th.th1(ref="ref_th1"): span th1
                    th.th2: span th2
                    th.th3: span th3
                    th.th4: span th4
                    th.th5: span th5
            tbody
                tr: each num in [11, 12, 13, 14, 15]
                    td= num
                tr
                    td 21
                    td.highlighted(ref="ref_td22") 22
                    td 23
                    td 24
                    td 25
                tr: each num in [31, 32, 33, 34, 35]
                    td= num
                tr: each num in [41, 42, 43, 44, 45]
                    td= num
                tr: each num in [51, 52, 53, 54, 55]
                    td= num
</template>



<script setup lang="ts">
const ref_container = ref<HTMLElement>()
const ref_th1 = ref<HTMLElement>()
const ref_td22 = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        stickElement(ref_container.value!, ref_th1.value!, {
            movement: { top: 50 },
        })
        stickElement(ref_container.value!, ref_td22.value!, {
            movement: { top: 200, left: 200 },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="stick-element/cross-level-sticky"]
    table
        border-spacing 0px
        border-collapse separate
        margin 0px // 解除 vitepress 主题设置
        overflow hidden // 解除 vitepress 主题设置
        outline none
    th
        padding 0px
        font-weight normal
        text-align start
    td
        padding 0px
    .container
        width: (720 + 2)px
        height: (540 + 2)px
        padding 50px
        overflow auto
        border 1px solid black
        >table
            width fit-content
        table
            th
                position relative
                z-index 100
                height 100px
                border 1px solid $black60
                background-color $orange20
            td
                position relative
                min-width 300px
                min-height 150px
                width 300px
                height 150px
                border 1px solid $black20
                text-align center
            .highlighted
                background-color rgba(0, 0, 255, 0.1)
            tr:nth-child(2n+1)>td:nth-child(2n+1)
                background-color $black05
</style>
