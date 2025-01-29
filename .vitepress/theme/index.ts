import DefaultTheme from "vitepress/theme"
import CShowcaseBox from "../../src/common/c-showcase-box/index.vue"
import CHighlightedCode from "../../src/common/c-highlighted-code/index.vue"
import type { Theme } from "vitepress"
import dragScroll from "@/lib/drag-scroll"
import handlelyResizable from "@/lib/handlely-resizable"
import simpleDraggable from "@/lib/simple-draggable"
import stickElement from "@/lib/stick-element"
import InlineSVG from "vue-inline-svg"
import CCraftBadgeGroup from "@/common/c-craft-badge-group/index.vue"

import "highlight.js/styles/atom-one-light.css"
import "@/assets/stylesheets/vitepress-default-theme-customized/index.styl"


export default {
    ...DefaultTheme,
    enhanceApp({ app })
    {
        // 在此注册全局组件、指令、插件等
        app.component("inline-svg", InlineSVG)
        app.component(CShowcaseBox.name!, CShowcaseBox)
        app.component(CHighlightedCode.name!, CHighlightedCode)
        app.component(CCraftBadgeGroup.name!, CCraftBadgeGroup)

        app.config.globalProperties['dragScroll'] = dragScroll
        app.config.globalProperties['handlelyResizable'] = handlelyResizable
        app.config.globalProperties['simpleDraggable'] = simpleDraggable
        app.config.globalProperties['stickElement'] = stickElement
    },
} satisfies Theme