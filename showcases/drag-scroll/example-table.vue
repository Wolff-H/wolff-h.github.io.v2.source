<template lang="pug">
c-showcase-box(path="drag-scroll/example-table")
    .container(
        ref="ref_container"
    )
        table.table
            tbody
                tr
                    td
                        table.col-1-drag(
                            ref="ref_col1_drag"
                        )
                            thead(
                                ref="ref_col1_head"
                            )
                                tr
                                    th
                                        div
                                            |row_n
                            tbody
                                tr(
                                    v-for="(row, row_n) in dataset.rows"
                                    :key="row_n"
                                )
                                    td
                                        |{{   row_n + 1   }}
                    td
                        table.main
                            thead(
                                ref="ref_thead"
                            )
                                tr
                                    th(
                                        v-for="(column_name) in dataset.columns"
                                        :key="column_name"
                                    )
                                        div
                                            |{{   column_name   }}
                            tbody
                                tr(
                                    v-for="(row, row_n) in dataset.rows"
                                    :key="row_n"
                                )
                                    td(
                                        v-for="(item, item_n) in row"
                                        :key="item_n"
                                    )
                                        |{{   item   }}
                    //- td.shadow-margin-right
</template>



<script setup lang="ts">
import dataset from "./example-table-dataset"

const ref_container = ref<HTMLElement>()
const ref_col1_drag = ref<HTMLElement>()
const ref_col1_head = ref<HTMLElement>()
const ref_thead = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_thead.value!, ref_container.value!, {
            movement: { y: [0, 0] },
        })
        dragScroll(ref_col1_drag.value!, ref_container.value!, {
            movement: { x: [0, 0] },
        })
        stickElement(ref_container.value!, ref_thead.value!, {
            movement: { top: 0 },
        })
        stickElement(ref_container.value!, ref_col1_drag.value!, {
            movement: { left: 0 },
        })
        stickElement(ref_container.value!, ref_col1_head.value!, {
            movement: { top: 0 },
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/example-table"]
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
        position relative
        width: (720 + 2)px
        height: (540 + 2)px
        padding 50px
        overflow scroll
        border 1px solid black
        &::-webkit-scrollbar
            display none
        >.table
            width fit-content
        table
            position relative
            border-spacing 0
        table.col-1-drag
            position relative
            z-index 1
            border-collapse separate
            table-layout fixed
            cursor grab
            user-select none
            >thead
                display table-caption
                position relative
                th
                    >div
                        display flex
                        position relative
                        z-index 100
                        min-width 58px
                        min-height 40px
                        height 40px
                        justify-content center
                        align-items center
                        border 1px solid $black40
                        background-color $black10
                        color $black80
                        font-weight bold
            >tbody
                position relative
                td
                    min-width 58px
                    height 40px
                    padding-left 10px
                    border-right 1px solid $black40
                    border-bottom 1px solid $black10
                    border-left 1px solid $black40
                    background-color $black03
                    color $black60
        table.main
            position relative
            border-collapse separate
            table-layout fixed
            >thead
                display table-caption
                position relative
                height 40px
                cursor grab
                user-select none
                th
                    >div
                        display flex
                        min-width 220px
                        min-height 40px
                        height 40px
                        justify-content center
                        align-items center
                        border-top 1px solid $black40
                        border-right 1px solid $black40
                        border-bottom 1px solid $black40
                        border-left none
                        background-color $black10
                        color $black80
                        font-weight bold
            >tbody
                td
                    min-width 220px
                    height 40px
                    padding-left 10px
                    border-right 1px solid $black10
                    border-bottom 1px solid $black10
                    border-left none
                    color $black60
            >.col-1-drag
                position absolute
                top 0px
                width 58px
                height 100%
                background-color $shadow20
        .shadow-margin-right
            min-width 50px
            height 100%
</style>
