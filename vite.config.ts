import { defineConfig } from 'vite'
import UnpluginAutoImport from 'unplugin-auto-import/vite'
import UnpluginVueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from "path"



// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const base_config = {
        base: './',
        resolve:
        {
            alias:
            {
                '@': path.resolve(__dirname, "./src"),
            },
        },
        server:
        {
            host: '0.0.0.0',
            port: 5173,
        },
        plugins:
        [
            // vue(), // 与 vitepress 重复导入了。 https://github.com/vuejs/vitepress/issues/3986
            UnpluginAutoImport({
                dts: true,
                eslintrc: {
                    enabled: true,
                },
                imports: [
                    // presets //
                    'vue',
                    // 'vue-router',
                    // global-imports //
                    {
                        '@/global-imports':
                        [
                            '_',
                            'clone',
                            'cloneShallow',
                            // 'router',
                            // 'route',
                            'dragScroll',
                            'handledResizable',
                            'pureDraggable',
                            'stickElement',
                        ],
                    },
                ],
                resolvers: [ElementPlusResolver()],
            }),
            UnpluginVueComponents({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        css:
        {
            preprocessorOptions:
            {
                stylus:
                {
                    globals:
                    {
                        '_colorset': path.resolve('src/assets/stylesheets/colorset/index.styl'),
                        '_patterns': path.resolve('src/assets/stylesheets/patterns/index.styl'),
                    },
                },
            },
        },
        define:
        {
            // __APP_ENV__: 'dev',
        } as Record<string, string>,
        ssr:
        {
            noExternal: ['element-plus'],
        },
    }

    return base_config
})
