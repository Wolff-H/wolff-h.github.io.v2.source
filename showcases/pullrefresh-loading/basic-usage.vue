<template lang="pug">
c-showcase-box(path="pullrefresh-loading/basic-usage")
    pullrefresh-loading.demo(
        @refresh="onRefresh"
        v-model="if_refreshing"
    )
        .list
            .item(v-for="i in 20")
                |{{ i }}
</template>



<script setup lang="ts">
const if_refreshing = ref(false)

function onRefresh()
{
    if_refreshing.value = true
    
    setTimeout(() => {
        if_refreshing.value = false
    }, 2000)
}
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="pullrefresh-loading/basic-usage"]
    .demo
        height 200px
        overflow-y auto
</style>
