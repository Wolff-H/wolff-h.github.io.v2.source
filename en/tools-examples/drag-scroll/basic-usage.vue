<template lang="pug">
c-showcase-box(
    data-demo="drag-scroll"
    data-topic="basic-usage"
)
    .container(
        ref="ref_scrollable"
    )
        img(
            src="/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable"
        )
    //- template(#code="")
    //-     c-highlighted-code(code_language="html")
    //-         |{{   code_snippets.template   }}
    //-     c-highlighted-code(code_language="typescript")
    //-         |{{   code_snippets.script   }}
    //-     c-highlighted-code(code_language="stylus")
    //-         |{{   code_snippets.style   }}
</template>

<script setup lang="ts">
// import { code_snippets } from './basic-usage'

const ref_draggable = ref<HTMLElement>()
const ref_scrollable = ref<HTMLElement>()

onMounted(() => {
    nextTick(() => {
        dragScroll(ref_draggable.value!, ref_scrollable.value!)
    })
})
</script>

<style lang="stylus">
@import _colorset

.showcase-box[data-demo='drag-scroll'][data-topic='basic-usage']
    .container
        display inline-block
        width 640px
        height 480px
        overflow auto
</style>
