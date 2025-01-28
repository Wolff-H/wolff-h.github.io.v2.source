export const code_snippets =
{
template:
`\
<template lang="pug">.
    .container(
        ref="ref_scrollable"
    )
        img(
            src="@/assets/images/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable"
        )
</template>
`,
script:
`
<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import dragScroll from "dragroll"

    export default defineComponent({
        setup()
        {
            const ref_draggable = ref() as { value: HTMLElement }
            const ref_scrollable = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                })
            })

            return{
                ref_draggable,
                ref_scrollable,
            }
        },
    })
</script>
`,
style:
`
<style lang="stylus">
    .container
        display inline-block
        width 800px
        height 600px
        overflow auto
</style>
`,
}
