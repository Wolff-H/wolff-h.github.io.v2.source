import DefaultTheme from "vitepress/theme"
import "highlight.js/styles/atom-one-light.css"
import CShowcaseBox from "../../src/common/c-showcase-box/index.vue"
import CHighlightedCode from "../../src/common/c-highlighted-code/index.vue"



export default {
    ...DefaultTheme,
    enhanceApp({ app })
    {
        // 在此注册全局组件、指令、插件等
        app.component(CShowcaseBox.name, CShowcaseBox)
        app.component(CHighlightedCode.name, CHighlightedCode)
    },
}