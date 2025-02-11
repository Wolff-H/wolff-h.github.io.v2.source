<template lang="pug">
c-showcase-box(path="vivid-calendar/basic-usage")
    #schedule
        vivid-calendar(
            ref="ref_calendar"
            v-model="date"
        )
            .plans(ref="ref_plans")
                .plan(
                    v-for="(v) of list_demo_plans"
                    :key="v.key"
                )
                    .head
                        .title
                            |{{ v.name }}
                        .actions
                            .action.delete
                                el-button(size="small")
                                    |删除事件
                    .body
                        .empty-hint
                            |事件内容...
</template>



<script setup lang="ts">
import dayjs from "dayjs"



const date = ref(dayjs().format('YYYY-MM-DD'))

const list_demo_plans =
[
    { key: 'plan1', name: '计划1' },
    { key: 'plan2', name: '计划2' },
    { key: 'plan3', name: '计划3' },
]

const ref_calendar = ref<ComponentPublicInstance>()
const ref_plans = ref<HTMLDivElement>()

onMounted(() => {
    nextTick(() => {
        setTimeout(() => {
            const dom_calendar_view = (ref_calendar.value!.$el as HTMLDivElement).querySelector<HTMLDivElement>('.calendar-view')!
            ref_plans.value!.style.height = `calc(100% - ${parseFloat(getComputedStyle(dom_calendar_view).height) / 6}px)`
        }, 0)
    })
})
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="vivid-calendar/basic-usage"]
    #schedule
        height 100vh
        >.vivid-calendar
            height 100%
            >.body
                overflow-y auto
                scroll-snap-type y mandatory
                >.calendar-view
                    scroll-snap-align start
                    scroll-snap-stop always
                    contain layout paint style
                >.plans
                    padding 12px
                    height calc(100% - 14.28vw)
                    scroll-snap-align start
                    scroll-snap-stop always
                    scroll-margin-top 14.28vw
                    contain strict
                    &::after
                        content ''
                        height 4px
                        width 40px
                        background-color $black10
                        position absolute
                        left calc(50% - 20px)
                        top 4px
                        border-radius 2px
                    >.plan
                        margin-bottom 12px
                        >.head
                            display flex
                            height 40px
                            align-items center
                            justify-content space-between
                            .title
                                font-size 14px
                            .actions
                                display flex
                                height 100%
                                align-items center
                                .action.add
                                    display flex
                                    height 100%
                                    align-items center
                        >.body
                            .empty-hint
                                display flex
                                align-items center
                                color $black15
                                font-size 14px
</style>
