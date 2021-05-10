<template>
  <div id="my-chart"></div>
</template>

<script lang='ts'>

  import { defineComponent, PropType, watchEffect } from 'vue'

  import { Chart } from '@antv/g2'
  import { IChart } from '@/typings/chart'

  export default defineComponent({
    props: {
      data: Array as PropType<IChart[]>
    },
    setup(props) {
      watchEffect(() => {
        if (props.data &&  props.data?.length >= 1) {
          // console.log(props.data)
          const chart = new Chart({
            container: 'my-chart',
            autoFit: true,
            height: props.data.length * 80,
            padding: [20, 80, 50, 100],
          })
          chart.data(props.data)

          // 设置别名
          chart.scale({
            "expenditure": {
              alias: '总工资'
            },
          })
          // 取消x轴
          chart.axis('name', {
            tickLine: null,
            line: null,
          })
          // 取消y轴
          chart.axis('expenditure', {
            label: null,
            title: {
              offset: 30,
              style: { fontWeight: 300 },
            },
            grid: null,
          })
          // 取消图例
          chart.legend(false)
          // 翻转坐标系
          chart.coordinate('rect').transpose()
          // 柱状图
          chart.interval().position('name*expenditure').color('name').size(26).label('expenditure', {
            style: { fill: '#8d8d8d' },
            offset: 10
          })
          // 渲染图标
          chart.render()
        }
      })
    }
  })

</script>