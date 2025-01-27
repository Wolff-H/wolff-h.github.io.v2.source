import DefaultTheme from "vitepress/theme"
import "/src/assets/stylesheets/colorset/index.styl"



export default {
    ...DefaultTheme,
    enhanceApp({ app })
    {
        // 在此注册全局组件、指令、插件等
    },
}