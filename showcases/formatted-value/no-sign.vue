<template>
<c-showcase-box path="formatted-value/no-sign">
  <span style="margin-right: 20px">正值</span>
  <formatted-value :number="3.1415926" :sign="false" />
  <br />
  <span style="margin-right: 20px">零值</span>
  <formatted-value :number="0" :sign="false" />
  <br />
  <span style="margin-right: 20px">负值</span>
  <formatted-value :number="-3.1415926" :sign="false" />
  <br />

  <br />

  <span style="margin-right: 20px">正值向量</span>
  <formatted-value :number="3.1415926" directional :sign="false" />
  <br />
  <span style="margin-right: 20px">零值向量</span>
  <formatted-value :number="0" :sign="false" />
  <br />
  <span style="margin-right: 20px">负值向量</span>
  <formatted-value :number="-3.1415926" directional :sign="false" />
  <br />
</c-showcase-box>
</template>

<style></style>
