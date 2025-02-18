<template lang="pug">
c-showcase-box(path="echartx/basic-usage")
    echartx.demo-figure-medium-size(
        :echart-option="option1"
    )
    br
    br
    echartx.demo-figure-medium-size(
        :echart-option="option2"
    )
</template>



<script setup lang="ts">
// 基础柱状图 //
const option1 = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'serie1',
      type: 'bar',
      data: [120, 200, 150, 80, 70, 110, 130],
    },
    {
      name: 'serie2',
      type: 'bar',
      data: [30, 210, 170, 240, 20, 80, 160],
    },
    {
      name: 'serie3',
      type: 'bar',
      data: [90, 110, 120, 130, 70, 110, 200],
    },
  ],
}

// 饼图图 //
const option2 = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
</script>



<style lang="stylus">
@import _colorset

.showcase-box[data-path="echartx/basic-usage"]
    .demo-figure-medium-size
        height 300px
</style>
