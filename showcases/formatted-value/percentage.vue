<template>
<c-showcase-box path="formatted-value/percentage">
  【非良定义的数值格式化选项】
  <br />
  <formatted-value :number="3.1415926" percentage />
  <br />
  <formatted-value :number="67" percentage />
  <br />
  <br />
  【良定义的数值格式化选项】
  <br />
  <formatted-value :number="3.1415926" percentage :decimals="2" />
  <br />
  <formatted-value :number="67" percentage :decimals="0" />
</c-showcase-box>
</template>

<style></style>
