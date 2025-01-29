import DefaultTheme from "vitepress/theme"
import "highlight.js/styles/atom-one-light.css"
import CShowcaseBox from "../../src/common/c-showcase-box/index.vue"
import CHighlightedCode from "../../src/common/c-highlighted-code/index.vue"
import type { Theme } from "vitepress"
import dragScroll from "@/lib/drag-scroll"
import handlelyResizable from "@/lib/handlely-resizable"
import simpleDraggable from "@/lib/simple-draggable"
import stickElement from "@/lib/stick-element"




export default {
    ...DefaultTheme,
    enhanceApp({ app })
    {
        // 在此注册全局组件、指令、插件等
        app.component(CShowcaseBox.name!, CShowcaseBox)
        app.component(CHighlightedCode.name!, CHighlightedCode)

        app.config.globalProperties['dragScroll'] = dragScroll
        app.config.globalProperties['handlelyResizable'] = handlelyResizable
        app.config.globalProperties['simpleDraggable'] = simpleDraggable
        app.config.globalProperties['stickElement'] = stickElement
    },
} satisfies Theme