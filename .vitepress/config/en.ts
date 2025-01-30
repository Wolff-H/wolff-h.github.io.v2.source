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
            { text: 'Tools', link: '/en/tools' },
            { text: 'Components', link: '/en/components' },
        ],
        sidebar:
        [
            {
                text: 'Tools',
                items:
                [
                    { text: 'Introduction', link: '/en/tools/index' },
                    { text: 'drag-scroll', link: '/en/tools/drag-scroll' },
                    { text: 'handled-resizable', link: '/en/tools/handled-resizable' },
                    { text: 'stick-element', link: '/en/tools/stick-element' },
                    { text: 'pure-draggable', link: '/en/tools/pure-draggable' },
                ],
            },
        ],
        socialLinks:
        [
            { icon: 'github', link: 'https://github.com/Wolff-H' },
        ],
    },
})
