<script setup lang="ts">
  import * as echarts from 'echarts';
  const props = defineProps({
    data: Array,
  });
  const chart = ref();
  let colorList = ['#22D7BB', '#24AAFF', '#5EDDF8', '#FCB840', '#F9D660'];
  let color1 = [
    ['rgba(34,215,187,0.5)', 'rgba(34,215,187,1)'],
    ['rgba(36,170,255,0.5)', 'rgba(36,170,255,1)'],
  ];
  let title = ['电子锁缺失', '未施封', '异常停车'];
  let dataValue = [100, 200, 300, 400, 500];
  let dataList = title.map((item, index) => {
    return {
      name: item,
      value: dataValue[index],
    };
  });
  let center = ['50%', '50%'];
  function init() {
    const myChart = echarts.init(chart.value);
    let option = {
      color: colorList,
      tooltip: {
        trigger: 'item',
        formatter: '{b} <br/> {c}',
        backgroundColor: 'rgba(67,100,247,0.8)',
        textStyle: {
          color: '#fff',
        },
        padding: [10, 10],
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: '#fff',
          },
        },
      },
      title: {
        text: `{a|${100}}`,
        x: '74',
        y: '88',
        textStyle: {
          rich: {
            a: {
              fontSize: 16,
              color: '#fff',
            },
          },
        },
      },
      legend: {
        orient: 'vertical',
        right: '-0%',
        top: 'middle',
        itemWidth: 13,
        itemHeight: 13,
        icon: 'circle',
        itemGap: 20,
        formatter(name) {
          console.log('name----->', name);

          let percentage = 0;
          for (let i = 0; i < dataValue.length; i++) {
            percentage += parseInt(dataValue[i]);
          }
          let result = dataList.find((item) => item.name == name);

          //   return `{a|${result.name}}   ${parseInt(result.value)}`;
          return `{a|${result.name} ${result.value}}`;
        },
        textStyle: {
          color: '#000',
          rich: {
            a: {
              fontSize: 14,
              color: '#fff',
              padding: [0, 10, 0, 6],
            },
            b: {
              fontSize: 14,
              color: '#666',
              padding: [0, 6, 0, 6],
            },
          },
        },
      },
      series: [
        // 展示层
        {
          type: 'pie',
          center: ['27%', '50%'],
          radius: ['72%', '86%'],
          itemStyle: {
            borderWidth: 0, //描边线宽
            borderColor: '#fff',
          },
          label: {
            show: false,
          },
          data: dataList,
        },
      ],
    };
    myChart.setOption(option);
  }
  onMounted(() => {
    init();
  });
</script>

<template>
  <div class="chart-container">
    <div class="chart" style="width: 338px; height: 180px" ref="chart"></div>
    <!-- 底座背景 -->
    <!-- <div class="bg"></div> -->
  </div>
</template>

<style scoped lang="scss">
  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;

    .chart,
    .bg {
      width: 100%;
      height: 100%;
    }
  }
</style>
