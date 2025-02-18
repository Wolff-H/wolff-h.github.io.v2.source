<template>
<c-showcase-box path="formatted-value/postive-sign">
  <span style="margin-right: 20px">正值</span>
  <formatted-value :number="3.1415926" positive-sign />
  <br />
  <span style="margin-right: 20px">负值</span>
  <formatted-value :number="-3.1415926" positive-sign />
  <br />
</c-showcase-box>
</template>

<style></style>
