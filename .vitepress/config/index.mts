import { defineConfig } from "vitepress"
import locale_config_en from "./en"
import common_config from "./common"
import locale_config_zh from "./zh"



export default defineConfig({
    ...common_config,

    locales:
    {
        en:
        {
            label: "English",
            lang: "en-US",
            link: "/en/",
            ...locale_config_en,
        },
        root:
        {
            label: "简体中文",
            lang: "zh-CN",
            link: "/zh/",
            ...locale_config_zh,
        },
    },
});