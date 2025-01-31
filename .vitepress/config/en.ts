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
            { text: 'Misc', link: '/en/misc' },
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
            {
                text: 'Components',
                items:
                [
                    { text: 'Introduction', link: '/en/components/index' },
                    { text: 'contenteditable', link: '/en/components/contenteditable' },
                    { text: 'css-box-editor', link: '/en/components/css-box-editor' },
                    { text: 'formatted-value', link: '/en/components/formatted-value' },
                    { text: 'echartx', link: '/en/components/echartx' },
                    { text: 'elx-multilevel-checkbox', link: '/en/components/elx-multilevel-checkbox' },
                    { text: 'mobile-calendar', link: '/en/components/mobile-calendar' },
                    { text: 'pullrefresh-loading', link: '/en/components/pullrefresh-loading' },
                ],
            },
            {
                text: 'Misc',
                items:
                [
                    { text: 'Introduction', link: '/en/misc/index' },
                    { text: 'tsp-experiment-gui', link: '/en/misc/tsp-experiment-gui' },
                ],
            },
        ],
        socialLinks:
        [
            { icon: 'github', link: 'https://github.com/Wolff-H' },
        ],
    },
})
