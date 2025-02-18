<script setup>
    import ShowcaseBasicUsage from "/showcases/echartx/basic-usage.vue"
    import ShowcaseEchartsUse from "/showcases/echartx/echarts-use.vue"
    import ShowcaseAntiFlicker from "/showcases/echartx/anti-flicker.vue"
</script>



# Echartx

<br />
<c-craft-badge-group
    readme="https://github.com/Wolff-H/echartx/blob/master/README.md"
    github="https://github.com/Wolff-H/echartx"
    npm="https://npmjs.com/package/@wolff-h/echartx"
/>

增强的 Echart 图表。基于 echarts 和 element-plus UI，额外提供了放大展示、切换视图、下载数据等功能，并集成了 echarts-use 能力。

在绝大部分场景下，使用 Echartx 组件时不需要更改任何设置。

## 初始化

Echartx 不自带 ECharts 库依赖，你需要在工程中安装自己的 ECharts 包，然后将其依赖通过 Echartx 的初始化方法引入。
`options`是额外的参数配置。`resizeable` false 表示禁用自带的缩放功能。

```ts
import * as echarts from 'echarts'
import { initialize } from '@wolff-h/echartx'

initialize({ echarts, options: { resizable: false } })
```

## 基础用法

默认配置下的 Echartx 图表。

<ShowcaseBasicUsage />

## 集成了 echarts-use 能力

Echartx 图表集成了 echarts-use 能力，你可以控制其在单独图表实例中生效。

在下面这个图表中体验 echarts-use 能力：

<!-- - <a href="en/tools/globally-reverse.html">globallyReverse</a> 全局反选
- <a href="en/tools/scrollable-tooltip.html">scrollableTooltip</a> 可滚浮窗
- <a href="en/tools/auto-resize.html">autoResize</a> 自适应空间
- <a href="en/tools/resizable.html">resizable</a> 可调整大小 -->
- globallyReverse 全局反选
- scrollableTooltip 可滚浮窗
- autoResize 自适应空间
- resizable 可调整大小

<ShowcaseEchartsUse />

## 防闪烁

特别地，当 echartx 元素切换显隐状态时（通常是由于被渲染在了模态框或标签页中），元素由隐藏时到显示时的计算尺寸变化会有缩放防抖延迟的闪烁跳跃。

启用`anti-flicker`来解决。echartx 将监听元素显隐切换，在合适的时机立即缩放重绘画布，避免画布闪烁。

仅在你确定 echartx 元素可能会发生显隐切换时启用此功能，避免无意义的性能开销。

> 你也可以通过设置 auto-resize 的防抖为 0 来解决，但不建议这样做，这会导致可观且无意义的性能开销。

<ShowcaseAntiFlicker />

## Echartx 属性

| 属性                         | 说明                                                                                 | 类型                                             | 可选值 | 默认值 |
| ---------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------ | ------ | ------ |
| id                           | 在全局作用域下唯一标记此图表的标识符（当你配置一些实例专用的设置时需要）             | string                                           | —      | —      |
| echart-option                | 传给 echarts 实例的 option                                                           | `echarts.EChartsOption`                          | —      | —      |
| init-params                  | 初始化 echarts 实例使用的参数                                                        | `Parameters<typeof echarts.init>[2]`             | —      | {}     |
| watch-option                 | 自动监听 echartOption 更新。默认启用。关闭此项，则你需要手动控制图表实例来执行更新。 | boolean                                          | —      | true   |
| override-option              | 是否覆写式更新实例的 Option。默认启用。                                              | boolean                                          | —      | true   |
| actions                      | 操作的自定义方法（放大展示、切换视图、下载数据）。详见 Actions 属性说明。            | `Actions`                                        | —      | —      |
| actions-enabled              | 启用的操作项。不设置则启用全部。                                                     | `('expand' \| 'toggleViewMode' \| 'download')[]` | —      | —      |
| download-file-name           | （内置下载）下载文件的输出名称                                                       | `() => string`                                   | —      | —      |
| download-file-name-timestamp | （内置下载）下载文件的输出名称是否附加后缀时间戳                                     | boolean                                          | —      | true   |
| echarts-use                  | 集成的 echarts-use 功能。详见 EchartsUse 属性说明。                                  | `EchartsUseConfig`                               | —      | —      |
| table-resolving              | 将作图数据转换为表格的一些设置。详见 TableResolving 属性说明。                       | `TableResolvingConfig`                           | —      | —      |
| anti-flicker                 | 画布缩放重绘的防闪烁。请仅在确定 echartx 元素可能会发生显隐切换时启用。              | boolean                                          | —      | —      |

## Actions 属性

传入的自定义的操作方法。

这些方法会在相应的内置操作行为前执行。在自定义方法内返回`false`，将阻止内置的默认行为。

| 属性           | 说明                                       | 类型                  | 可选值 | 默认值 |
| -------------- | ------------------------------------------ | --------------------- | ------ | ------ |
| expand         | 接收一个函数，在触发「放大展示」动作时执行 | `() => void \| false` | —      | —      |
| toggleViewMode | 接收一个函数，在触发「切换视图」动作时执行 | `() => void \| false` | —      | —      |
| download       | 接收一个函数，在触发「下载数据」动作时执行 | `() => void \| false` | —      | —      |

## EchartsUse 属性

各个插件的参数详见 _工具/echarts-use_。

| 属性              | 说明                                                  | 类型                                                 | 可选值 | 默认值 |
| ----------------- | ----------------------------------------------------- | ---------------------------------------------------- | ------ | ------ |
| autoResize        | 接收一个 [enable, props] 元组，分别设置是否启用与参数 | `[enable?: boolean, props?: AutoResizeProps]`        | —      | —      |
| resizable         | 接收一个 [enable, props] 元组，分别设置是否启用与参数 | `[enable?: boolean, props?: ResizableProps]`         | —      | —      |
| globallyReverse   | 接收一个 [enable, props] 元组，分别设置是否启用与参数 | `[enable?: boolean, props?: GloballyReverseProps]`   | —      | —      |
| scrollableTooltip | 接收一个 [enable, props] 元组，分别设置是否启用与参数 | `[enable?: boolean, props?: ScrollableTooltipProps]` | —      | —      |

## TableResolving 属性

| 属性               | 说明                                                           | 类型                                                         | 可选值 | 默认值 |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------------------ | ------ | ------ |
| smartPercentSuffix | 使用内置解析器转换表格数据时，是否自动识别添加列名的百分率后缀 | boolean                                                      | —      | false  |
| parser             | 自定义的 table 构造解析器                                      | `(option: EChartsOption) => { columns: any[]; data: any[] }` | —      | —      |

## Echartx 对外暴露的属性/方法

| 属性/方法           | 说明               | 类型                              | 可选值 | 默认值 |
| ------------------- | ------------------ | --------------------------------- | ------ | ------ |
| ref                 | 顶层 div 元素      | `Ref<HTMLDivElement>`             | —      | —      |
| figureRef           | 绘图元素           | `Ref<HTMLDivElement>`             | —      | —      |
| tableRef            | 表格实例           | `Ref<Table<any>>`                 | —      | —      |
| expandedPlottingRef | 放大展示模态框元素 | `Ref<HTMLDivElement>`             | —      | —      |
| figureInstance      | 绘图实例           | `null \| ExtendedEchartsInstance` | —      | —      |

## 备注

Echartx 内置提供了将作图数据转换到表格的能力，但是仍然强烈建议你使用自己的实现。

Echartx 当前内置的 tableResolver 尚未覆盖所有情况（目前已支持的有：折线图、柱状图、饼图）。如果需要转换更多图表类型，或定制转换（如格式化、重命名），最佳做法是在 `tableResolving` 中传入你自己的 parser 来做解析。
