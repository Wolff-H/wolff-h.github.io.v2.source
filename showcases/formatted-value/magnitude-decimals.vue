<template>
<c-showcase-box path="formatted-value/magnitude-decimals">
  <span style="font-size: 12px">
    定义：小数位在数量级达到「万」时保留2位，数量级达到「亿」时保留4位，默认保留0位。
  </span>
  <br />
  <br />
  <span style="display: inline-block; min-width: 240px"> 数值：3.14 </span>
  <formatted-value
    :number="3.14"
    :order-of-magnitude="[4, 8]"
    :magnitude-decimals="{ 4: 2, 8: 4 }"
  />
  <span style="opacity: 0.5; font-size: 12px; margin-left: 24px"
    >// 未定义 decimals，保留原始值</span
  >
  <br />
  <span style="display: inline-block; min-width: 240px"> 数值：3.14 </span>
  <formatted-value
    :number="3.14"
    :decimals="0"
    :order-of-magnitude="[4, 8]"
    :magnitude-decimals="{ 4: 2, 8: 4 }"
  />
  <span style="opacity: 0.5; font-size: 12px; margin-left: 24px"
    >// 定义 decimals 为 0，在 magnitude-decimals
    梯度覆盖以外的数量级，取默认的保留 0 位小数</span
  >
  <br />
  <span style="display: inline-block; min-width: 240px">
    数值：314159.26535
  </span>
  <formatted-value
    :number="314159.26535"
    :order-of-magnitude="[4, 8]"
    :magnitude-decimals="{ 4: 2, 8: 4 }"
  /><br />
  <span style="display: inline-block; min-width: 240px">
    数值：31415926535
  </span>
  <formatted-value
    :number="31415926535"
    :order-of-magnitude="[4, 8]"
    :magnitude-decimals="{ 4: 2, 8: 4 }"
  /><br />
  <!-- @todo 罗列更多所有位数的值 -->
  <span style="display: inline-block; min-width: 240px">
    数值：31415926535
  </span>
  <formatted-value
    :number="31415926535"
    :order-of-magnitude="[4, 8, 12]"
    :magnitude-decimals="{ 4: 2, 8: 2, 12: 2 }"
  /><br />
  <span style="display: inline-block; min-width: 240px">
    数值：31415926535
  </span>
  <formatted-value
    :number="31415926535"
    :order-of-magnitude="[4, 8]"
    :magnitude-decimals="{ 4: 1, 5: 2, 6: 3, 7: 4, 8: 5 }"
  /><br />
  <span style="display: inline-block; min-width: 240px">
    数值：31415926535
  </span>
  <formatted-value
    :number="31415926535"
    :order-of-magnitude="[3, 7]"
    :magnitude-decimals="{ 4: 1, 5: 2, 6: 3, 7: 4, 8: 5 }"
  /><br />
  <span style="display: inline-block; min-width: 240px">
    数值：31415926535
  </span>
  <formatted-value
    :number="31415926535"
    :order-of-magnitude="[2, 6]"
    :magnitude-decimals="{ 4: 1, 5: 2, 6: 3, 7: 4, 8: 5 }"
  /><br />
  <span style="display: inline-block; min-width: 240px">
    数值：31415926535
  </span>
  <formatted-value
    :number="31415926535"
    :order-of-magnitude="[1, 5]"
    :magnitude-decimals="{ 4: 1, 5: 2, 6: 3, 7: 4, 8: 5 }"
  /><br />
  <span style="display: inline-block; min-width: 240px">
    数值：31415926535
  </span>
  <formatted-value
    :number="31415926535"
    :order-of-magnitude="[1, 5]"
    :magnitude-decimals="{ 6: 1, 7: 2, 8: 3 }"
  /><br />
  <!-- <formatted-value :number="31415926535" :order-of-magnitude="5" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="6" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="7" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="8" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="9" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="10" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="11" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="12" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="13" /><br /> -->
</c-showcase-box>
</template>

<style></style>
