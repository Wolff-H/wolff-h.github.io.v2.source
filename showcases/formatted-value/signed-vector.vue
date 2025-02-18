<template>
<c-showcase-box path="formatted-value/sign-vector">
  <span style="margin-right: 20px">正值</span>
  <formatted-value :number="3.1415926" directional positive-sign />
  <br />
  <span style="margin-right: 20px">负值</span>
  <formatted-value :number="-3.1415926" directional positive-sign />
  <br />
</c-showcase-box>
</template>

<style></style>
