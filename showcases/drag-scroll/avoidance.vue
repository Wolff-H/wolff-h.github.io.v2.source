<template lang="pug">
c-showcase-box(path="drag-scroll/avoidance")
    .ruler-container(
        ref="ref_scrollable"
    )
        .ruler-element(
            ref="ref_draggable"
        )
            span(
                v-for="(value, index) of order_numbers"
                :key="index"
            )
                span(
                    @click="toggleNumber(index - 1)"
                    :class="order_numbers[index - 1] ? 'o-active' : ''"
                )
                    |{{   index   }}
</template>



<script setup lang="ts">
const ref_draggable = ref<HTMLElement>()
const ref_scrollable = ref<HTMLElement>()

const order_numbers = ref([
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
])

function toggleNumber(num: number)
{
    order_numbers.value[num] = !order_numbers.value[num]
}

onMounted(() => {
    nextTick(() => {
        const avoid_targets = Array.from(
            document.querySelectorAll(`.showcase-box[data-path="drag-scroll/avoidance"] .ruler-container .ruler-element>span>span`)
        ) as HTMLElement[]
        
        dragScroll(ref_draggable.value!, ref_scrollable.value!, {
            avoid: avoid_targets,
        })
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="drag-scroll/avoidance"]
    .ruler-container .ruler-element>span>span.o-active
        color $primary
    .ruler-container
        width: (500 + 2)px
        height: (50 + 2)px
        overflow-x auto
        border 1px solid $black60
        &::-webkit-scrollbar
            display none
        .ruler-element
            width 1000px
            height 50px
            *
                cursor default
                user-select none
            >span
                display inline-flex
                width 50px
                height 100%
                align-items center
                color $black60
                &:nth-child(2n)
                    background-color $black05
                >span
                    padding 4px
                    border 1px solid $black15
                    &:hover
                        background-color $black15
                    &:active
                        background-color $black20
</style>
