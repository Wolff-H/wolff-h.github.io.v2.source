<template>
<c-showcase-box path="formatted-value/decimals">
  <span style="display: inline-block; min-width: 120px">原始值</span>
  <formatted-value :number="3.1415926" />
  <br />
  <br />
  【保留位数】
  <br />
  <span style="display: inline-block; min-width: 120px">1位</span>
  <formatted-value :number="3.1415926" :decimals="1" />
  <br />
  <span style="display: inline-block; min-width: 120px">2位</span>
  <formatted-value :number="3.1415926" :decimals="2" />
  <br />
  <span style="display: inline-block; min-width: 120px">3位</span>
  <formatted-value :number="3.1415926" :decimals="3" />
  <br />
  <br />
  【精度算法】
  <br />
  <span style="display: inline-block; min-width: 120px">round（默认）</span>
  <formatted-value :number="3.1415926" :decimals="2" />
  <br />
  <span style="display: inline-block; min-width: 120px">floor</span>
  <formatted-value :number="3.1415926" :decimals="[2, 'floor']" />
  <br />
  <span style="display: inline-block; min-width: 120px">ceil</span>
  <formatted-value :number="3.1415926" :decimals="[2, 'ceil']" />
</c-showcase-box>
</template>

<style></style>
