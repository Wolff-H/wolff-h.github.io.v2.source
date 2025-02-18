<template>
<c-showcase-box path="formatted-value/fallback">
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
  <formatted-value
    :number="''"
    :fallback="[(numstr) => numstr === '', '数据为空诶⊙﹏⊙|||']"
  />
</c-showcase-box>
</template>

<style></style>
