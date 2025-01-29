import type { DefaultTheme as VitepressDefaultTheme } from "vitepress/theme"



/**
 * 参考 https://vitepress.dev/zh/reference/default-theme-config
 */
const theme_config: VitepressDefaultTheme.Config =
{
    outline:
    {
        level: [2, 4], // 映射 h2 到 h4 标题到大纲结构
    },
}

export default theme_config