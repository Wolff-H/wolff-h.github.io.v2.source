<template>
<c-showcase-box path="formatted-value/directional">
  <span style="margin-right: 20px">正方向</span>
  <formatted-value :number="3.1415926" directional />
  <br />
  <span style="margin-right: 20px">无方向</span>
  <formatted-value :number="3.1415926" />
  <br />
  <span style="margin-right: 20px">负方向</span>
  <formatted-value :number="-3.1415926" directional />
  <br />
</c-showcase-box>
</template>

<style></style>
