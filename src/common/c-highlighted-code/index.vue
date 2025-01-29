<template lang="pug">
pre.highlighted-code
    code(
        :class="props.code_language"
        ref="ref_code"
    )
        slot
</template>



<script setup lang="ts">
import HighlightJS from "highlight.js"

defineOptions({
    name: 'c-highlighted-code',
})

const props = defineProps({
    code_language: {
        type: String,
        default: 'plaintext'
    }
})

const ref_code = ref<HTMLElement | null>(null)

onMounted(() => {
    nextTick(() => {
        if (ref_code.value) {
            HighlightJS.highlightElement(ref_code.value)
        }
    })
})
</script>



<style lang="stylus">
@import _colorset

.highlighted-code
    margin 0px

    >code.hljs
        padding 0px

    >code
        padding 0px
        font-family consolas
        white-space pre
        font-size 14px
        line-height normal

        *
            font-family consolas
</style>
