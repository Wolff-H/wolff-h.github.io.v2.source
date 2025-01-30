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
            // { text: 'Home', link: '/' },
            // { text: 'Examples', link: '/markdown-examples' },
            { text: 'Tools', link: '/en/tools' },
            { text: 'Components', link: '/en/components' },
        ],

        sidebar:
        [
            // {
            //     text: 'Examples',
            //     items:
            //     [
            //         { text: 'Markdown Examples', link: '/markdown-examples' },
            //         { text: 'Runtime API Examples', link: '/api-examples' },
            //     ],
            // },
            {
                text: 'Tools',
                items:
                [
                    { text: 'Introduction', link: '/en/tools/index' },
                    { text: 'drag-scroll', link: '/en/tools/drag-scroll' },
                    { text: 'handled-resizable', link: '/en/tools/handled-resizable' },
                ],
            },
        ],

        socialLinks:
        [
            { icon: 'github', link: 'https://github.com/Wolff-H' },
        ],
    },
})
