<template lang="pug">
c-showcase-box(path="vivid-calendar/basic-usage")
    vivid-calendar(
        v-model="date"
    )
</template>



<script setup lang="ts">
import dayjs from "dayjs"

const date = ref(dayjs().format('YYYY-MM-DD'))

</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="vivid-calendar/basic-usage"]
    // 
</style>
