<template>
  <h2 class="admin-list-title">报表统计</h2>

  <div class="line-graph">
    <line-graph :data="chartData" />
  </div>
</template>

<script lang='ts'>

  import { defineComponent, onMounted, reactive } from 'vue'
  import { getSectionChart } from '@/network/section'

  import LineGraph from './cpn/LineGraph.vue'

  import { IChart, IChartResult } from '@/typings/chart'
  

  export default defineComponent({
    components: {
      LineGraph
    },
    setup() {
      const chartData = reactive<IChart[]>([])

      onMounted(() => {
        // 图表数据
        getSectionChart<IChartResult>().then(result => {
          chartData.push(...result.data)
        })
      })

      return {
        chartData
      }
    }
  })

</script>

<style lang="less" scoped>

  .line-graph {
    overflow-x: hidden;
    overflow-y: auto;
    width: 85%;
    max-height: 80%;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
