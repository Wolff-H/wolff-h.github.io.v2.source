<template lang="pug">
.craft-badge-group
    .badge.readme(
        v-if="props.readme"
        @click="openNewTab(props.readme)"
        title="readme"
    )
        inline-svg(src="/readme.svg")
    .badge.github(
        v-if="props.github"
        @click="openNewTab(props.github)"
        title="github"
    )
        inline-svg(src="/github.svg")
    .badge.npm(
        v-if="props.npm"
        @click="openNewTab(props.npm)"
        title="npm"
    )
        inline-svg(src="/npm.svg")
</template>



<script setup lang="ts">


defineOptions({
    name: 'c-craft-badge-group',
})

const props = defineProps<{
    readme?: string
    github?: string
    npm?: string
}>()

function openNewTab(url: string)
{
    window.open(url, '_blank')
}

</script>



<style lang="stylus">
@import _colorset

.craft-badge-group
    display flex
    flex-wrap wrap
    align-items center
    gap 8px

    .badge
        display flex
        justify-content center
        align-items center
        height 24px
        width 24px
        opacity 0.5
        cursor pointer
        overflow hidden
        &:hover
            opacity 0.75
        &:active
            opacity 1
</style>
