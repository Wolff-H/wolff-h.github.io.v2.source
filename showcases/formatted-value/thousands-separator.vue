<template>
<c-showcase-box path="formatted-value/thousands-separator">
  <formatted-value :number="3.1415926" thousands-separator />
  <br />
  <formatted-value :number="1234567890123.1415926" thousands-separator />
</c-showcase-box>
</template>

<style></style>
