import { defineConfig } from "vitepress"
import locale_config_en from "./en"
import common_config from "./common"
import locale_config_zh from "./zh"



export default defineConfig({
    ...common_config,

    locales:
    {
        root:
        {
            label: "English",
            lang: "en-US",
            link: "/en/",
            ...locale_config_en,
        },
        zh:
        {
            label: "简体中文(in dev)",
            lang: "zh-CN",
            link: "/zh/",
            ...locale_config_zh,
        },
    },
});