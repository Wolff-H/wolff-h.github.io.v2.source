<template>
<c-showcase-box path="formatted-value/order-of-magnitude">
  【降级转换：原始值 → 换算值】<br />

  <span style="display: inline-block; min-width: 120px">万</span>
  <formatted-value :number="31415926535" /> →
  <formatted-value :number="31415926535" :order-of-magnitude="[4]" /><br />

  <span style="display: inline-block; min-width: 120px">亿</span>
  <formatted-value :number="31415926535" /> →
  <formatted-value :number="31415926535" :order-of-magnitude="[8]" /><br />

  <span style="display: inline-block; min-width: 120px">亿、万</span>
  <formatted-value :number="31415926535" /> →
  <formatted-value :number="31415926535" :order-of-magnitude="[4, 8]" /><br />

  <span style="display: inline-block; min-width: 120px">亿、万</span>
  <formatted-value :number="31415926" /> →
  <formatted-value :number="31415926" :order-of-magnitude="[4, 8]" /><br />

  <span style="display: inline-block; min-width: 120px">亿、万</span>
  <formatted-value :number="3141" /> →
  <formatted-value :number="3141" :order-of-magnitude="[4, 8]" /><br />

  <br />

  【强制转换：原始值 31415926535】<br />

  <formatted-value :number="31415926535" :order-of-magnitude="1" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="2" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="3" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="4" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="5" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="6" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="7" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="8" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="9" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="10" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="11" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="12" /><br />
  <formatted-value :number="31415926535" :order-of-magnitude="13" /><br />
</c-showcase-box>
</template>

<style></style>
