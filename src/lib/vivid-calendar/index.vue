<template lang="pug">
.vivid-calendar(
    ref="_ref"
)
    .head
        .toolbar
            .year-month-selector
                .view-year
                    |{{ view_year }}
                .connector.y-m
                    |/
                .view-month
                    |{{ String(view_month).padStart(2, '0') }}
                .connector.m-d
                    |/
                .selected_day
                    |{{ String(dayjs(model).date()).padStart(2, '0') }}
                .which-week(
                    v-if="calendar_view_type === 'week'"
                )
                    |{{ calcDiffFromThisWeek() }}
            .actions
                .action.today(
                    v-if="!moment_now.isSame(dayjs(model), 'date')"
                    @click="toToday"
                )
                    |今日
        .weekdays
            .weekday(
                v-for="(v, i) of ['一', '二', '三', '四', '五', '六', '日']"
                :key="i"
            )
                |{{ v }}
    .body(
        ref="ref_calendar_body"
        @scroll="onScrollCalendar"
    )
        .calendar-view(
            :data-view-type="calendar_view_type"
            :data-presentation="if_calendar_body_fully_scrolled_y ? 'week' : 'month'"
        )
            .year-view(v-if="false")
            .month-view(
                ref="ref_month_view"
                @click="onClickMonthView"
                @touchstart.stop
                @scroll="onScrollMonthView"
            )
                .month.view-panel(
                    v-for="(panel_name, panel_index) of list_month_view_panel_name"
                    :key="panel_name"
                    :class="panel_name"
                    ref="refs_month_view_panel"
                    :style="dict_month_view_panel_translation[panel_name]"
                )
                    .week(
                        v-for="(serie, row) of month_view[panel_index]"
                        :key="`${row}-${serie.week}`"
                        :data-row="row + 1"
                        :data-week="serie.week"
                        :class="serie.classes"
                    )
                        .day(
                            v-for="(v) of serie.weekdays"
                            :key="v.day"
                            :data-ymd="v.ymd"
                        )
                            .day-inner(
                                :class="v.classes"
                            )
                                |{{ v.day }}
        slot(name="default")
</template>



<script setup lang="ts">
import dayjs from "dayjs"
import * as Calendar from "./calendar"
import { searchUpHTMLElement } from "./calendar"

defineOptions({ name: 'vivid-calendar' })

// constants //
const list_month_view_panel_name = ['prev', 'curr', 'next'] as const

// dom refs //
const _ref = ref<HTMLDivElement>()
const ref_calendar_body = ref<HTMLDivElement>()
const ref_month_view = ref<HTMLDivElement>()
const refs_month_view_panel = ref<HTMLDivElement[]>([])

/** 实时的选择状态 */
const model = defineModel<string>()
/** 视图所在年 */
const view_year = ref(dayjs(model.value).year())
/** 视图所在月。为 0 表示当前不在月视图下。 */
const view_month = ref(dayjs(model.value).month() + 1)
/** 记录的当前时间 */
const moment_now = ref(dayjs())

const if_calendar_body_fully_scrolled_y = ref(false)

const dict_month_view_panel_translateY = reactive({
    prev: 0,
    curr: 0,
    next: 0,
})

const dict_month_view_panel_translation = computed(() => {
    return _.mapValues(dict_month_view_panel_translateY, (offset_y) => `translate: 0 ${offset_y}px`)
})

const month_view = computed(() => {
    const [year, month] = [view_year.value, view_month.value]

    const moment_curr_month = dayjs([year, month - 1])
    const moment_prev_month = moment_curr_month.subtract(1, 'month')
    const moment_next_month = moment_curr_month.add(1, 'month')

    const now = moment_now.value
    const selected_date = dayjs(model.value)

    if (calendar_view_type.value === 'month')
    {
        const view_on_month =
        [
            {
                year: moment_prev_month.year(),
                month: moment_prev_month.month() + 1,
            },
            {
                year: moment_curr_month.year(),
                month: moment_curr_month.month() + 1,
            },
            {
                year: moment_next_month.year(),
                month: moment_next_month.month() + 1,
            },
        ].map((panel) => {
            const { year, month } = panel
            return Calendar.composeMonthWeekSerie(Calendar.computeMonthMatrix(year, month), {
                year: year,
                month: month,
                now: now,
                selected_date: selected_date,
            })
        })
    
        return view_on_month
    }
    else
    {
        const curr_month_ym =
        {
            year: moment_curr_month.year(),
            month: moment_curr_month.month() + 1,
        }

        const view_on_week =
        [
            selected_date.isSame(selected_date.subtract(1, 'week'), 'month') ? curr_month_ym :
            {
                year: moment_prev_month.year(),
                month: moment_prev_month.month() + 1,
            },
            curr_month_ym,
            selected_date.isSame(selected_date.add(1, 'week'), 'month') ? curr_month_ym :
            {
                year: moment_next_month.year(),
                month: moment_next_month.month() + 1,
            },
        ].map((panel) => {
            const { year, month } = panel
            return Calendar.composeMonthWeekSerie(Calendar.computeMonthMatrix(year, month), {
                year: year,
                month: month,
                now: now,
                selected_date: selected_date,
            })
        })
    
        return view_on_week
    }
})

const month_view_selected_week_index = computed(() => {
    return month_view.value[1].findIndex((week_serie) => week_serie.classes.includes('o-selected'))
})

const calendar_view_type = ref<'month' | 'week'>('month')

function calcDiffFromThisWeek()
{
    const diff = dayjs(model.value).startOf('week').diff(moment_now.value.startOf('week'), 'week')

    let direction = diff === 0 ?
        ''
        :
        diff < 0 ?
            'prev'
            :
            'next'

    return `${{'': '本', prev: '上', next: '下' }[direction]}${direction ? Math.abs(diff) : ''}周`
}

function onClickMonthView(event: MouseEvent)
{
    const ymd = searchUpHTMLElement(event.target as HTMLElement, (element) => {
        if (element.classList.contains('day')) return element.dataset['ymd']
    })!

    const [y, m, d] = ymd.split(',').map((n) => +n)
    const [year, month] = [view_year.value, view_month.value]
    
    if (calendar_view_type.value === 'month')
    {
        if (year === y && month === m) model.value = dayjs([y, m - 1, d]).format('YYYY-MM-DD')
    }
    else
    {
        model.value = dayjs([y, m - 1, d]).format('YYYY-MM-DD')
        view_year.value = y
        view_month.value = m

        // 等待新的 month_view 被计算完成 //
        nextTick(() => {
            onScrollCalendar() // 触发面板偏移计算并重设偏移
        })
    }
}

function onScrollMonthView()
{
    const dom_month_view = ref_month_view.value!

    const { scrollLeft, scrollWidth, clientWidth } = dom_month_view

    let full_scrolled_to: '' | 'prev' | 'next' = ''

    if (scrollLeft === 0) full_scrolled_to = 'prev'
    else if (scrollLeft + clientWidth >= scrollWidth) full_scrolled_to = 'next'

    if (full_scrolled_to)
    {
        if (calendar_view_type.value === 'month')
        {
            if (full_scrolled_to === 'prev')
                view_month.value === 1 ? (view_month.value = 12, view_year.value--) : view_month.value--
            else
                view_month.value === 12 ? (view_month.value = 1, view_year.value++) : view_month.value++

            const days_in_month = dayjs([view_year.value, view_month.value - 1]).daysInMonth()
            const selected_date = dayjs(model.value)
            const view_day = Math.min(selected_date.date(), days_in_month)
            model.value = dayjs([view_year.value, view_month.value - 1, view_day]).format('YYYY-MM-DD')
        }
        else
        {
            const selected_date = dayjs(model.value)

            if (full_scrolled_to === 'prev')
            {
                // 设置当前选择日期为上周的同周几所在日，并设置当前面板年月 //
                const { years: year, months: month, date: date } = selected_date.subtract(1, 'week').toObject()

                view_year.value = year
                view_month.value = month + 1
                model.value = dayjs([year, month, date]).format('YYYY-MM-DD')
            }
            else
            {
                // 设置当前选择日期为下周的同周几所在日，并设置当前面板年月 //
                const { years: year, months: month, date: date } = selected_date.add(1, 'week').toObject()

                view_year.value = year
                view_month.value = month + 1
                model.value = dayjs([year, month, date]).format('YYYY-MM-DD')
            }

            // 等待新的 month_view 被计算完成 //
            nextTick(() => {
                onScrollCalendar() // 触发面板偏移计算并重设偏移
            })
        }

        ref_month_view.value?.scrollTo({ left: window.innerWidth })
    }
}

const FULL_SCROLL_EPSILON = 1

function onScrollCalendar()
{
    const { scrollHeight, clientHeight } = ref_calendar_body.value!

    if_calendar_body_fully_scrolled_y.value = scrollHeight - ref_calendar_body.value!.scrollTop - clientHeight < FULL_SCROLL_EPSILON
    /**
     * @todo
     * 里面有些计算是可以缓存起来的，不用在每次 scroll 时都实时计算一次。
     * 首行和末行时，可以直接给确定值，不用走计算。
     * 比较低优先级的优化，日历表在 css 动画期间屏蔽用户操作。
     */
    const dom_calendar_body = ref_calendar_body.value!
    const dom_month_view = ref_month_view.value!
    const scroll_y = dom_calendar_body.scrollTop
    const month_view_height = dom_month_view.getBoundingClientRect().height
    const week_row_index_from_end = 6 - month_view_selected_week_index.value - 1 // 这个乘数是该行距离底部的行数

    dict_month_view_panel_translateY.curr = scroll_y * (week_row_index_from_end / 5) // 这是对上面计算过程的一个化简式，最大化减少计算的中间步骤以减少误差

    // 进入周视图 //
    if ((5 / 6) * month_view_height - scroll_y < FULL_SCROLL_EPSILON)
    {
        calendar_view_type.value = 'week'

        // 设置前一个面板的偏移 //
        const prev_week_row_index_from_end = week_row_index_from_end + 1 > 5 ? 0 : week_row_index_from_end + 1
        dict_month_view_panel_translateY.prev = scroll_y * (prev_week_row_index_from_end / 5)

        // 设置后一个面板的偏移 //
        const next_week_row_index_from_end = week_row_index_from_end - 1 < 0 ? 5 : week_row_index_from_end - 1
        dict_month_view_panel_translateY.next = scroll_y * (next_week_row_index_from_end / 5)
    }
    // 进入月视图 //
    else if (scroll_y === 0)
    {
        calendar_view_type.value = 'month'

        dict_month_view_panel_translateY.curr = 0
        dict_month_view_panel_translateY.prev = 0
        dict_month_view_panel_translateY.next = 0
    }

    /**
     * @todo 考虑矩阵是一个规则数据结构，我可能不需要像现在这样将每周单独包装一遍成为行。
     */
}

function toToday()
{
    const now = moment_now.value
    view_year.value = now.year()
    view_month.value = now.month() + 1
    model.value = now.format('YYYY-MM-DD')

    // 周视图下，视图数据更新后，重计算并设置面板偏移 //
    if (calendar_view_type.value === 'week')
    {
        nextTick(() => {
            onScrollCalendar()
        })
    }
}



// onCreated //
// 没 10 分钟更新一下 moment_now //
setInterval(() => {
    moment_now.value = dayjs()
}, 1000 * 60 * 10)

onMounted(() => {
    nextTick(() => {
        setTimeout(() => {
            ref_month_view.value?.scrollTo({ left: window.innerWidth }) // 滚动到中间面板
        })
    })
})

</script>



<style lang="stylus">
@import _colorset
@import _patterns

.vivid-calendar
    display flex
    flex-direction column
    >.head
        .toolbar
            display flex
            height 40px
            align-items center
            justify-content space-between
            .year-month-selector
                display flex
                height 100%
                align-items center
                font-size 20px
                font-weight bold
                .view-year
                    display flex
                    align-items center
                    justify-content center
                    padding 0px 12px
                    height 100%
                .connector.y-m
                    // opacity 0.5
                .view-month
                    display flex
                    align-items center
                    justify-content center
                    padding 0px 12px
                    height 100%
                .connector.m-d
                    opacity 0.33
                .selected_day
                    display flex
                    align-items center
                    justify-content center
                    padding 0px 12px
                    height 100%
                    opacity 0.33
                .which-week
                    display flex
                    align-items center
                    justify-content center
                    padding 0px 12px
                    height 100%
                    opacity 0.33
                    font-size 14px
                    font-weight normal
            .actions
                display flex
                height 100%
                align-items center
                .action
                    padding 0px 12px
                    height 100%
                    display flex
                    align-items center
                    justify-content center
                .action.today
                    color $primary
        .weekdays
            display flex
            position relative
            height 29px
            align-items center
            border-bottom 1px solid $black15
            font-size 14px
            .weekday
                flex-grow 1
                display flex
                align-items center
                justify-content center
    >.body
        position relative
        height calc(100% - 69px)
        >.calendar-view
            position relative
            .year-view
                // 
            .month-view
                display flex
                overflow-x auto
                overflow-y hidden
                scroll-snap-type x mandatory
                scrollbar-width none
                -ms-overflow-style none
                contain layout paint style
                &::-webkit-scrollbar
                    display none
                .month
                    width 100%
                    flex-shrink 0
                    scroll-snap-align start
                    scroll-snap-stop always
                    display flex
                    flex-direction column
                    will-change translate
                    .week
                        display flex
                        width 100%
                        .day
                            display flex
                            padding 2px
                            flex-grow 1
                            flex-shrink 0
                            width 0px
                            aspect-ratio 1 / 1
                            .day-inner
                                display flex
                                justify-content center
                                align-items center
                                flex-grow 1
                                border-radius 12px
                                font-weight bold
                                &.in-the-month
                                    color $black80
                                    &.o-selected
                                        background-color $primary20
                                    &.o-today
                                        border 2px solid $primary50
        >.calendar-view[data-presentation="month"]
            .month-view
                .month
                    .week
                        .day
                            .day-inner
                                &.padding-start, &.padding-end
                                    color $black10
</style>
