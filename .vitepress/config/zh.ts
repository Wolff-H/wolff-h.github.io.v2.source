import { defineConfig } from "vitepress"



// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "wolff-h.github.io",
    description: "Wolff's playground.",
    themeConfig:
    {
        // https://vitepress.dev/reference/default-theme-config
        nav:
        [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
            { text: '工具', link: '/zh/tools' },
            { text: '组件', link: '/zh/components' },
        ],

        sidebar:
        [
            {
                text: 'Examples',
                items:
                [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
            {
                text: '工具',
                items:
                [
                    { text: '介绍', link: '/zh/tools/index' },
                    { text: 'drag-scroll', link: '/zh/tools/drag-scroll' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
        ],

        socialLinks:
        [
            { icon: 'github', link: 'https://github.com/Wolff-H' },
        ],
    },
})
