import DefaultTheme from "vitepress/theme"
// 基础 //
import dayjs from "dayjs"
import dayjs_plugin_utc from "dayjs/plugin/utc"
import dayjs_plugin_weekday from "dayjs/plugin/weekday"
import dayjs_plugin_duration from "dayjs/plugin/duration"
import dayjs_plugin_toObject from "dayjs/plugin/toObject"
import dayjs_plugin_isBetween from "dayjs/plugin/isBetween"
import dayjs_plugin_minMax from "dayjs/plugin/minMax"
import dayjs_plugin_isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import dayjs_plugin_objectSupport from "dayjs/plugin/objectSupport"
import dayjs_plugin_advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs_plugin_arraySupport from 'dayjs/plugin/arraySupport'
import dayjs_plugin_isoWeek from 'dayjs/plugin/isoWeek'

import CShowcaseBox from "../../src/common/c-showcase-box/index.vue"
import CHighlightedCode from "../../src/common/c-highlighted-code/index.vue"
import type { Theme } from "vitepress"

import InlineSVG from "vue-inline-svg"
import CCraftBadgeGroup from "@/common/c-craft-badge-group/index.vue"

// 库 //
import dragScroll from "@/lib/drag-scroll"
import handledResizable from "@/lib/handled-resizable"
import pureDraggable from "@/lib/pure-draggable"
import stickElement from "@/lib/stick-element"
import VividCalendar from "@/lib/vivid-calendar/index.vue"
import PullrefreshLoading from "@/lib/pullrefresh-loading/index.vue"
import Echartx from "@wolff-h/echartx"
import "@wolff-h/echartx/dist/echartx.css"
import FormattedValue from "formatted-value"

// 样式 //
import "highlight.js/styles/atom-one-light.css"
import "@/assets/stylesheets/vitepress-default-theme-customized/index.styl"
import "formatted-value/dist/formatted-value.css"



// 设置 dayjs //
dayjs.extend(dayjs_plugin_utc)
dayjs.extend(dayjs_plugin_weekday)
dayjs.extend(dayjs_plugin_toObject)
dayjs.extend(dayjs_plugin_isBetween)
dayjs.extend(dayjs_plugin_minMax)
dayjs.extend(dayjs_plugin_isSameOrBefore)
dayjs.extend(dayjs_plugin_duration)
dayjs.extend(dayjs_plugin_objectSupport)
dayjs.extend(dayjs_plugin_advancedFormat)
dayjs.extend(dayjs_plugin_arraySupport)
dayjs.extend(dayjs_plugin_isoWeek)
dayjs.locale('zh-cn', {
    weekStart: 1,
})

export default
{
    ...DefaultTheme,
    enhanceApp({ app })
    {
        // 在此注册全局组件、指令、插件等
        app.component("inline-svg", InlineSVG)
        app.component(CShowcaseBox.name!, CShowcaseBox)
        app.component(CHighlightedCode.name!, CHighlightedCode)
        app.component(CCraftBadgeGroup.name!, CCraftBadgeGroup)
        app.component(VividCalendar.name!, VividCalendar)
        app.component(PullrefreshLoading.name!, PullrefreshLoading)
        app.component(Echartx.name!, Echartx)
        app.component(FormattedValue.name!, FormattedValue)

        app.config.globalProperties['dragScroll'] = dragScroll
        app.config.globalProperties['handledResizable'] = handledResizable
        app.config.globalProperties['pureDraggable'] = pureDraggable
        app.config.globalProperties['stickElement'] = stickElement
    },
} satisfies Theme
