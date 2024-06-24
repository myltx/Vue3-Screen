import { graphic } from 'echarts/core';

const data0 = [1, 1, 1, 1, 1, 1, 1];
const data1 = [10, 50, 100, 35, 55, 30, 20];
const getvalue1 = [40, 85, 230, 95, 100, 60, 50];

export const equipmentOption = {
//   backgroundColor: '#000E1A', //背景色
  tooltip: {
    trigger: 'axis',
    borderColor: 'rgba(255,255,255,.3)',
    backgroundColor: 'rgba(13,5,30,.6)',
    textStyle: {
      color: 'white', //设置文字颜色
    },
    borderWidth: 1,
    padding: 5,
    formatter: function (parms: any) {
      const str =
        '年份：' +
        parms[0].axisValue +
        '</br>' +
        parms[0].marker +
        '上衣：' +
        parms[0].value +
        '</br>' +
        parms[2].marker +
        '裙子:' +
        parms[2].value;
      return str;
    },
  },
  textStyle: {
    color: '#C9C9C9',
  },

  // color: ['#fbc292', '#06fbfe',  '#f06e91'],
  legend: {
    show: false,
    type: 'scroll',
    orient: 'vertical',
    selectedMode: false, //图例点击失效
    right: '10%',
    top: '15%',
    textStyle: {
      color: '#ffffff',
      fontSize: 14,
    },

    // data: datas.legendData,
  },
  grid: {
    containLabel: true,
    left: '0',
    top: '22%',
    bottom: '10%',
    right: '0',
  },
  xAxis: {
    type: 'category',
    data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    axisLine: {
      show: false,
      lineStyle: {
        color: '#B5B5B5',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.45)',
      },
      fontSize: 12,
    },
  },
  yAxis: [
    {
      type: 'value',
      name: '',
      nameTextStyle: {
        padding: [200, 0, 0, 600], // 四个数字分别为上右下左与原位置距离
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#B5B5B5',
        },
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(255, 255, 255, 0.45)',
        },
        fontSize: 10,
      },
    },
  ],
  series: [
    {
      type: 'bar',
      name: '器材',
      data: data1,
      stack: 'zs',
      barMaxWidth: 'auto',
      barWidth: 20,
      itemStyle: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: '#017ebb',
            },
            {
              offset: 1,
              color: '#06fbfe',
            },
          ],
        },
      },
    },
    {
      name: '折线',
      type: 'line',
      data: getvalue1,
      smooth: true,
      symbol: 'none',
      itemStyle: {
        normal: {
          lineStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(5, 186, 203, 0)',
              },
              {
                offset: 0.5,
                color: 'rgba(5, 186, 203, 1)',
              },
              {
                offset: 1,
                color: 'rgba(5, 186, 203, 0)',
              },
            ]),
            shadowColor: 'rgba(255, 120, 0,1)',
            shadowBlur: 8,
          },
          areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(197, 106, 255, 0)',
              },
              {
                offset: 0.6,
                color: 'rgba(255, 120, 0, 0)',
              },
            ]),
          },
        },
      },
    },

    {
      data: data0,
      type: 'pictorialBar',
      barMaxWidth: '20',
      symbol: 'diamond',
      symbolOffset: [0, '50%'],
      symbolSize: [20, 10],
      zlevel: 2,
      itemStyle: {
        normal: {
          color: '#06fbfe',
        },
      },
    },
    {
      data: data1,
      type: 'pictorialBar',
      barMaxWidth: '20',
      symbolPosition: 'end',
      symbol: 'diamond',
      symbolOffset: [0, '-50%'],
      symbolSize: [0, 20],
      zlevel: 2,
    },
    {
      data: data1,
      type: 'pictorialBar',
      barMaxWidth: '20',
      symbolPosition: 'end',
      symbol: 'diamond',
      symbolOffset: [0, '-50%'],
      symbolSize: [20, 10],
      zlevel: 2,
      itemStyle: {
        normal: {
          color: '#06fbfe',
        },
      },
    },
  ],
};
