<template lang="pug">
.showcase-box(
    :data-path="props.path"
)
    .main
        slot
    .code(v-if="props.if_render_code")
        .collapse-toggle(@click="toggleDisplayCode")
            |code
            IconCopy.icon.copy(
                @click.stop
                title="copy code"
                size="16px"
            )
        el-collapse-transition
            .code-wrapper(v-show="if_display_code")
                .content
                    slot(name="code")
                        c-highlighted-code(
                            code_language="html"
                            v-if="code_snippets?.template"
                        )
                            |{{   code_snippets.template    }}
                        c-highlighted-code(
                            code_language="typescript"
                            v-if="code_snippets?.script"
                        )
                            |{{   code_snippets.script    }}
                        c-highlighted-code(
                            code_language="stylus"
                            v-if="code_snippets?.style"
                        )
                            |{{   code_snippets.style    }}
</template>



<script setup lang="ts">
import { ElCollapseTransition } from 'element-plus'
import { Copy as IconCopy } from "@icon-park/vue-next"
import axios from "axios"



defineOptions({
    name: 'c-showcase-box',
})

const props = withDefaults(defineProps<{
    if_render_code?: boolean
    path: string
}>(), {
    if_render_code: true,
})

const if_display_code = ref(false)

const code_snippets = ref<{ template?: string, script?: string, style?: string }>()

function toggleDisplayCode()
{
    if_display_code.value = !if_display_code.value
}

onMounted(async () => {
    const response = await axios.get(`/showcases-code/${props.path}.json`)
    code_snippets.value = response.data
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box
    min-width 400px
    margin 16px 0px
    border 1px solid $black10
    border-radius 4px
    transition box-shadow 0.33s

    // 解除 vitepress 的设置 //
    img
        max-width initial
        height initial

    &:hover
        box-shadow 0px 0px 8px $black15
    >.main
        min-height 80px
        padding 16px
        overflow auto
    >.code
        >.collapse-toggle
            display flex
            position relative
            height 32px
            justify-content center
            align-items center
            border-top 1px solid $black10
            color $black40
            cursor pointer
            user-select none
            &:hover
                background-color $primary10
                >.icon.copy
                    display block
            &:active
                background-color $primary20
            >.icon.copy
                display none
                position absolute
                right 8px
                font-size 16px
                &:hover
                    color $primary
        >.code-wrapper
            >.content
                display flex
                flex-direction column
                gap 16px
                padding 16px
                border-top 1px solid $black15
                background-color #fafafa
</style>
