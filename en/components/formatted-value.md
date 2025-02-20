<script setup>
    import ShowcaseBasicUsage from "/showcases/formatted-value/basic-usage.vue"
    import ShowcaseDirectional from "/showcases/formatted-value/directional.vue"
    import ShowcasePositiveSign from "/showcases/formatted-value/positive-sign.vue"
    import ShowcaseSignedVector from "/showcases/formatted-value/signed-vector.vue"
    import ShowcaseNoSign from "/showcases/formatted-value/no-sign.vue"
    import ShowcaseThousandsSeparator from "/showcases/formatted-value/thousands-separator.vue"
    import ShowcasePercentage from "/showcases/formatted-value/percentage.vue"
    import ShowcaseDecimals from "/showcases/formatted-value/decimals.vue"
    import ShowcaseTitle from "/showcases/formatted-value/title.vue"
    import ShowcaseOrderOfMagnitude from "/showcases/formatted-value/order-of-magnitude.vue"
    import ShowcaseMagnitudeDecimals from "/showcases/formatted-value/magnitude-decimals.vue"
    import ShowcasePercentSign from "/showcases/formatted-value/percent-sign.vue"
    import ShowcaseFallback from "/showcases/formatted-value/fallback.vue"
    import ShowcaseFallbackBy from "/showcases/formatted-value/fallback-by.vue"
</script>

# formatted-value

<br />
<c-craft-badge-group
    readme="https://github.com/Wolff-H/formatted-value/blob/master/README.md"
    github="https://github.com/Wolff-H/formatted-value"
    npm="https://npmjs.com/package/formatted-value"
/>

格式化的数值显示。

## 基础用法

通常地显示一个数值。

<ShowcaseBasicUsage />

## 带方向的数值

使用 `directional` 属性来定义数值是否是有方向的。该属性接受一个 `Boolean` 值。

数值的方向取自数值的实际值，默认红正绿负，其它情况置灰。你也可以覆盖使用自己的色彩方案。

<ShowcaseDirectional />

## 总是显示正值的正号

总是在值前显示正号（当数值是一个正值）。

使用 `positive-sign` 属性定义。该属性接受一个 `Boolean` 值。

<ShowcasePositiveSign />

## 带正负号的向量

同时开启 `directional` 和 `positive-sign`。实现总是带正负号的向量值展示。

<ShowcaseSignedVector />

## 不展示正负号

设置 `sign` 为 `false` 可以关闭正负号的展示，令数值的展现更加清爽。

<ShowcaseNoSign />

## 千分位

开启 `thousands-separator` 将令数值作千分位分割格式展示。

<ShowcaseThousandsSeparator />

## 百分数

开启 `percentage` 将数值表示为百分数。

需注意，当数值格式化的选项是「良定义（well-formed）」的（也即，启用百分数的同时显式地定义了小数位），则组件将实际计算百分数并保留到给定的小数位；否则，数值将被视为已处理，仅作直接添加百分符号。

在使用百分数时，你应当总是提供良定义的选项；如果只是想简单后缀附加一个百分符号，请使用「百分号 `percent-sign`」。

> 例如，在对原始值作乘法运算后，可能遭遇浮点精度问题，如 n.0000000000001 的结果，因此良好的定义必须指定保留小数。

<ShowcasePercentage />

## 小数精度

设置 `decimals` 来规定数值的小数精度。

小数精度定义有简写与详写两种方式。

简写时，传入一个 `number` 以约束数值要保留的小数位。默认以 Math.round 方法取舍精度。

详写时，传入一个 `[dicimals: number, method: 'round'|'floor'|'ceil']` 元组，同时指定保留小数位和精度取舍算法。

<ShowcaseDecimals />

## title

开启 `titled` 为数值元素添加 `title` 特性。

此时，数值渲染 html 元素将带上 title 特性，其值为该数值未经任何加工时的原始值。

通常用于提供原始值可知性，比如因保留有效数位或换算百分比而丢失了部分信息的场景。

<ShowcaseTitle />

## 数量级换算

传入 `order-of-magnitude` 为 N 来预处理数值到相应数量级（十、百、千、万等中文表示）。N 是落在区间 `[1, 13]` 上的整数，表示 10 的 N 次幂。

当传入单个数值 `N`，组件将强制转换数值到该数量级。

当传入一个数组 `[...{n | n ∈ N}]`，组件将按从大到小的顺序依次尝试数组中的幂数，如果数值不满足任何提供的数量级，则转换失败，不产生任何效果。

##### 全部可用的幂数和数量级关系如下

```markdown
0. ''
1. 十
2. 百
3. 千
4. 万
5. 十万
6. 百万
7. 千万
8. 亿
9. 十亿
10. 百亿
11. 千亿
12. 万亿
13. 兆
```

##### 降级转换的梯度示例

```html
<formatted-value :number="31415926535" :order-of-magnitude="[4]" />
```

| 整数部分位数 | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | ... |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 转换到数量级 |     |     |     |     | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  |

```html
<formatted-value :number="31415926535" :order-of-magnitude="[4, 8]" />
```

| 整数部分位数 | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | ... |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 转换到数量级 |     |     |     |     | 万  | 万  | 万  | 万  | 亿  | 亿  | 亿  | 亿  | 亿  | 亿  | 亿  |

```html
<formatted-value :number="31415926535" :order-of-magnitude="[3, 6, 9]" />
```

| 整数部分位数 | 0   | 1   | 2   | 3   | 4   | 5   | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | ...  |
| ------------ | --- | --- | --- | --- | --- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 转换到数量级 |     |     |     | 千  | 千  | 千  | 百万 | 百万 | 百万 | 十亿 | 十亿 | 十亿 | 十亿 | 十亿 | 十亿 |

<ShowcaseOrderOfMagnitude />

## 数量级保留小数

传入 `magnitude-decimals` 一个字典，可以指定当数值超过特定数量级后，采用的保留小数位方法。

字典类型为 `Record<number, number | [bit: number, method: 'floor' | 'round' | 'ceil' | undefined]>`。

如果未定义字典，则使用默认小数 `decimals` 的定义；如果未定义默认小数位保留，则使用原始小数。

##### 降级转换的梯度示例

```html
<formatted-value
  :number="31415926535"
  :order-of-magnitude="[4]"
  :magnitude-decimals="{ 4: 2 }"
/>
```

| 整数部分位数 | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | ... |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 转换到数量级 |     |     |     |     | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  | 万  |
| 保留到小数位 |     |     |     |     | 2   | 2   | 2   | 2   | 2   | 2   | 2   | 2   | 2   | 2   | 2   |

```html
<formatted-value
  :number="31415926535"
  :order-of-magnitude="[4, 8]"
  :magnitude-decimals="{ 4: 2, 8: 4 }"
/>
```

| 整数部分位数 | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | ... |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 转换到数量级 |     |     |     |     | 万  | 万  | 万  | 万  | 亿  | 亿  | 亿  | 亿  | 亿  | 亿  | 亿  |
| 保留到小数位 |     |     |     |     | 2   | 2   | 2   | 2   | 4   | 4   | 4   | 4   | 4   | 4   | 4   |

```html
<formatted-value
  :number="31415926535"
  :decimals="3"
  :order-of-magnitude="[4, 8]"
  :magnitude-decimals="{ 4: 2, 8: 4 }"
/>
```

| 整数部分位数 | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | ... |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 转换到数量级 |     |     |     |     | 万  | 万  | 万  | 万  | 亿  | 亿  | 亿  | 亿  | 亿  | 亿  | 亿  |
| 保留到小数位 | 3   | 3   | 3   | 3   | 2   | 2   | 2   | 2   | 4   | 4   | 4   | 4   | 4   | 4   | 4   |

<ShowcaseMagnitudeDecimals />

## 百分号

开启 `percent-sign` 在数值后加上百分号。使用此项仅会添加符号，不作计算。

<ShowcasePercentSign />

## 百分号空格

在添加百分号时，组件默认在数值与百分符号间添加一个英文空格，可以传入 `percent-sign-space` 为 false 而不添加空格。

## 兜底方法（断言）

理想情况下，传入 formatted-value 的 number 属性应当是一个 `number` 或 `numberstring`，然而，如果在运行时取得其他值，可以通过 fallback 方法兜底转换输出。

内置默认的兜底方法将转换 `''`、`'-'`、`null`、`undefined` 为短横线输出。

fallback 参数类型为 `() => [tester: (numstr: string) => boolean, output: string]`。

<ShowcaseFallback />

## 兜底方法（函数）

定义 fallbackBy 函数来兜底输入。fallbackBy 的类型是 `(number: string) => string | undefined | void`。fallbackBy 将覆盖 fallback 定义。

相较于 fallback，前者是一个「断言」，而 fallbackBy 允许定义一个完整函数，能够支持更复杂的兜底处理。

然而，在绝大部分场景下你其实**不应该**使用到 fallbackBy，因为复杂的数据兜底处理原则上**应该**放在 formatted-value 外部，而不是其内。
当然，如果你确实想将处理结果渲染在 formatted-value 内，那么使用这个 api 是合适的。

<ShowcaseFallbackBy />

## FormattedValue 属性

| 属性                | 说明                                      | 类型                                                                                       | 可选值                                                                                      | 默认值 |
| ------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------ |
| number              | 数值                                      | number / string                                                                            | —                                                                                           | —      |
| sign                | 是否显示正负号                            | boolean                                                                                    | —                                                                                           | true   |
| positive-sign       | 是否总是显示正值的正号                    | boolean                                                                                    | —                                                                                           | false  |
| percentage          | 百分数                                    | boolean                                                                                    | —                                                                                           | false  |
| thousands-separator | 是否显示千分位分隔符                      | boolean                                                                                    | —                                                                                           | false  |
| directional         | 是否标记数值具有方向性                    | boolean                                                                                    | —                                                                                           | false  |
| direction           | 向量数值的方向                            | string                                                                                     | down / '' / up                                                                              | ''     |
| decimals            | 保留小数位                                | number / [bit, method]                                                                     | 需指定精度算法时，传入元组 [bit: number, method: 'floor' \| 'round' \| 'ceil' \| undefined] | —      |
| titled              | 是否添加 title 属性（将被赋为数值原始值） | boolean                                                                                    | —                                                                                           | —      |
| order-of-magnitude  | 数量级换算                                | number / number[]                                                                          | —                                                                                           | —      |
| magnitude-decimals  | 数量级保留小数                            | Record<number, number \| [bit: number, method: 'floor' \| 'round' \| 'ceil' \| undefined]> | —                                                                                           | —      |
| percent-sign        | 百分号                                    | boolean                                                                                    | —                                                                                           | —      |
| percent-sign-space  | 百分号空格                                | boolean                                                                                    | —                                                                                           | —      |
| fallback            | 兜底方法（断言）                          | [tester: (numstr: string) => boolean, output: string]                                      | —                                                                                           | —      |
| fallback-by          | 兜底方法（函数）                          | (number: string) => string                                                                 | undefined                                                                                   | void   |

## FormattedValue 对外暴露的属性/方法

| 属性           | 说明                   | 类型                        | 可选值 | 默认值 |
| -------------- | ---------------------- | --------------------------- | ------ | ------ |
| ref            | 顶层 span 元素         | `Ref<HTMLSpanElement>`      | —      | —      |
| composition    | 格式化处理后的构造对象 | `FormattedValueComposition` | —      | —      |
| directionClass | 向量类                 | `DirectionClass`            | —      | —      |

## toFormattedValue - 纯字串输出的数值格式化

格式化数值同时提供一个纯字串输出的版本。

#### 用法

toFormattedValue 接受一个数值，按给定选项规则产生一个格式化的结果字符串。

toFormattedValue 格式化的选项规则、类型定义、内部处理逻辑与 formatted-value 完全同构。

特别地，可以简写 number 属性为参数，形如 `toFormattedValue(number, props)`。

#### 示例

```typescript
import { toFormattedValue } from 'formatted-value'

const value1 = toFormattedValue({
  number: 31415926.535,
  thousandsSeparator: true,
})
// value1 = '31,415,926.535'

const value2 = toFormattedValue({
  number: 3.1415926,
  decimals: 4,
  percentage: true,
  positiveSign: true,
})
// value2 = '+314.1593 %'

/**
 * 简写 number 参数
 */
const value2 = toFormattedValue(3.1415926, {
  decimals: 4,
  percentage: true,
  positiveSign: true,
})
// value3 = '+314.1593 %'
```
