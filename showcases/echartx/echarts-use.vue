<template lang="pug">
c-showcase-box(path="echartx/echarts-use")
    echartx.demo-figure-medium-size(
        :echart-option="optionStack"
    )
</template>



<script lang="ts" setup>
// 多层折线图 //
const optionStack = {
  // title: {
  //   text: '多层折线图 Line',
  // },
  tooltip: {
    trigger: 'axis',
    order: 'valueDesc',
  },
  legend: {
    // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    type: 'scroll',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
    {
      name: 'Text Ads',
      type: 'line',
      stack: 'Total',
      data: [20, 82, 91, 34, 90, 230, 210],
    },
    {
      name: 'Physical Ads',
      type: 'line',
      stack: 'Total',
      data: [260, 232, 251, 294, 250, 280, 250],
    },
    {
      name: 'Social Media',
      type: 'line',
      stack: 'Total',
      data: [720, 592, 898, 839, 791, 635, 419],
    },
    {
      name: 'Interpersonal Sharing',
      type: 'line',
      stack: 'Total',
      data: [120, 52, 61, 36, 101, 198, 100],
    },
    {
      name: 'Spam (Email)',
      type: 'line',
      stack: 'Total',
      data: [110, 91, 86, 115, 150, 150, 170],
    },
    {
      name: 'Spam (Social Media)',
      type: 'line',
      stack: 'Total',
      data: [210, 202, 141, 204, 294, 130, 26],
    },
    {
      name: 'Spam (SMS)',
      type: 'line',
      stack: 'Total',
      data: [220, 382, 291, 334, 290, 130, 313],
    },
    {
      name: 'Spam (Union Ads)',
      type: 'line',
      stack: 'Total',
      data: [330, 272, 291, 354, 420, 450, 440],
    },
    {
      name: 'Spam (Video Ads)',
      type: 'line',
      stack: 'Total',
      data: [220, 342, 301, 224, 270, 340, 630],
    },
    {
      name: 'Spam (Search Engine)',
      type: 'line',
      stack: 'Total',
      data: [845, 1232, 1401, 1334, 1690, 1530, 1520],
    },
    {
      name: 'Spam (Text Ads)',
      type: 'line',
      stack: 'Total',
      data: [40, 142, 171, 94, 150, 30, 10],
    },
    {
      name: 'Spam (Physical Ads)',
      type: 'line',
      stack: 'Total',
      data: [160, 32, 58, 64, 120, 140, 110],
    },
    {
      name: 'Pyramid Sale',
      type: 'line',
      stack: 'Total',
      data: [1220, 1182, 1091, 1234, 1090, 1130, 1610],
    },
  ],
}
</script>

<style lang="stylus">
.showcase-box[data-path="echartx/echarts-use"]
    .demo-figure-medium-size
        height 600px
</style>
