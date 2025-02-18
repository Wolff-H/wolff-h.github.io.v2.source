<template>
<c-showcase-box path="formatted-value/fallback-by">
  默认：
  <br /><br />
  <formatted-value :number="3.1415926" /><br />
  <formatted-value :number="''" /><br />
  <formatted-value :number="'-'" /><br />
  <formatted-value :number="null" /><br />
  <formatted-value :number="undefined" /><br />
  <br />
  自定义：
  <br /><br />
  <formatted-value :fallback-by="fallbackBy" :number="3.1415926" /><br />
  <formatted-value :fallback-by="fallbackBy" :number="''" /><br />
  <formatted-value :fallback-by="fallbackBy" :number="'-'" /><br />
  <formatted-value :fallback-by="fallbackBy" :number="null" /><br />
  <formatted-value :fallback-by="fallbackBy" :number="undefined" /><br />
  <formatted-value :fallback-by="fallbackBy" :number="'***'" /><br />
  <formatted-value :fallback-by="fallbackBy" :number="'NaN'" /><br />
</c-showcase-box>
</template>

<script lang="ts" setup>
function fallbackBy(input: string) {
  if (['', '-', 'undefined', 'null'].includes(input)) return '-'
  else if (input === '***') return '***'
  else if (input === 'NaN') return 'Computation Error'
}
</script>

<style></style>
