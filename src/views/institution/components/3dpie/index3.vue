<template>
  <div class="chart-container">
    <div class="chart" ref="chart" />
    <!-- 底座背景 -->
    <div class="bg"></div>
  </div>
</template>

<script>
  import { color1 } from './data';
  import { getPie3D, getParametricEquation } from './chart.js'; // 工具类js，页面路径自己修改

  export default {
    name: 'Chart',
    props: {
      ringData: {
        type: Array,
        default: () => [],
      },
    },
    watch: {
      ringData() {
        // this.initChart()
      },
    },
    data() {
      return {
        chartData: [],
        statusChart: null,
        option: {},
      };
    },
    created() {
      this.setLabel();
      console.log('xxxxaaa', this.ringData);
    },
    mounted() {
      this.initChart();

      // 根据窗口变化自动调节图表大小
      const that = this;
      window.onresize = function () {
        that.changeSize();
      };
    },
    methods: {
      // 初始化label样式
      setLabel() {
        this.chartData = JSON.parse(JSON.stringify(this.ringData));
        this.chartData.forEach((item, index) => {
          console.log('item', item);
          item.itemStyle = {
            color: color1[index],
          };
          item.label = {
            normal: {
              show: false,
              color: color1[index],
              formatter: ['{b|{b}}', '{c|{c}}{b|台}', '{d|{d}%}'].join(''), // 用来换行
              rich: {
                b: {
                  color: '#fff',
                  lineHeight: 25,
                  align: 'left',
                },
                c: {
                  fontSize: 22,
                  color: '#fff',
                  textShadowColor: '#1c90a6',
                  textShadowOffsetX: 0,
                  textShadowOffsetY: 2,
                  textShadowBlur: 5,
                },
                d: {
                  color: color1[index],
                  align: 'left',
                },
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                },
                backgroundColor: 'rgba(255,255,255,0.75)',
                extraCssText: 'box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.3);',
                textStyle: {
                  fontSize: 14,
                  color: '#000',
                },
                formatter: (params) => {
                  console.log(params, 'params');
                  const item = params[0];
                  return item.echoMap.examinationType + ' : ' + item.count + ' 条';
                },
              },
            },
          };
          item.labelLine = {
            normal: {
              show: false,
              lineStyle: {
                width: 1,
                color: 'rgba(255,255,255,0.7)',
              },
            },
          };
        });
      },
      // 图表初始化
      initChart() {
        this.statusChart = this.$chart.init(this.$refs.chart);
        // 传入数据生成 option, 构建3d饼状图, 参数工具文件已经备注的很详细
        this.option = getPie3D(this.chartData, 0.88, 138, 20, 10, 0.7);
        this.option.grid = { top: '30%' };
        this.statusChart.setOption(this.option);
        // 是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
        this.option.series.push({
          name: '电梯状态', // 自己根据场景修改
          backgroundColor: 'transparent',
          type: 'pie',
          label: {
            opacity: 1,
            fontSize: 13,
            lineHeight: 20,
          },
          startAngle: -30, // 起始角度，支持范围[0, 360]。
          clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
          radius: ['50%', '70%'],
          center: ['50%', '50%'],
          data: this.chartData,
          itemStyle: {
            opacity: 0, // 这里必须是0，不然2d的图会覆盖在表面
          },
        });
        this.statusChart.setOption(this.option);
        this.bindListen(this.statusChart);
      },
      // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
      // optionName是防止有多个图表进行定向option传递，单个图表可以不传，默认是opiton
      bindListen(myChart, optionName = 'option') {
        let selectedIndex = '';
        let hoveredIndex = '';
        // 监听点击事件，实现选中效果（单选）
        myChart.on('click', (params) => {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
          const isSelected = !this[optionName].series[params.seriesIndex].pieStatus.selected;
          const isHovered = this[optionName].series[params.seriesIndex].pieStatus.hovered;
          const k = this[optionName].series[params.seriesIndex].pieStatus.k;
          const startRatio = this[optionName].series[params.seriesIndex].pieData.startRatio;
          const endRatio = this[optionName].series[params.seriesIndex].pieData.endRatio;
          console.log(
            'this[optionName].series[params.seriesIndex].pieData.endRatio->',
            this[optionName].series[params.seriesIndex].pieData.endRatio,
          );
          // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
          if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
            this[optionName].series[selectedIndex].parametricEquation = getParametricEquation(
              this[optionName].series[selectedIndex].pieData.startRatio,
              this[optionName].series[selectedIndex].pieData.endRatio,
              false,
              false,
              k,
              this[optionName].series[selectedIndex].pieData.value,
            );
            this[optionName].series[selectedIndex].pieStatus.selected = false;
          }
          // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
          this[optionName].series[params.seriesIndex].parametricEquation = getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            this[optionName].series[params.seriesIndex].pieData.value,
          );
          this[optionName].series[params.seriesIndex].pieStatus.selected = isSelected;
          // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
          selectedIndex = isSelected ? params.seriesIndex : null;
          // 使用更新后的 option，渲染图表
          myChart.setOption(this[optionName]);
        });
        // 监听 mouseover，近似实现高亮（放大）效果
        myChart.on('mouseover', (params) => {
          // 准备重新渲染扇形所需的参数
          let isSelected;
          let isHovered;
          let startRatio;
          let endRatio;
          let k;
          // 如果触发 mouseover 的扇形当前已高亮，则不做操作
          if (hoveredIndex === params.seriesIndex) {
            console.log('k', k);
            // 否则进行高亮及必要的取消高亮操作
          } else {
            // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
            if (hoveredIndex !== '') {
              // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
              isSelected = this[optionName].series[hoveredIndex].pieStatus.selected;
              isHovered = false;
              startRatio = this[optionName].series[hoveredIndex].pieData.startRatio;
              endRatio = this[optionName].series[hoveredIndex].pieData.endRatio;
              k = this[optionName].series[hoveredIndex].pieStatus.k;
              // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
              this[optionName].series[hoveredIndex].parametricEquation = getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                this[optionName].series[hoveredIndex].pieData.value,
              );
              this[optionName].series[hoveredIndex].pieStatus.hovered = isHovered;
              // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
              hoveredIndex = '';
            }
            // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
            if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
              // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
              isSelected = this[optionName].series[params.seriesIndex].pieStatus.selected;
              isHovered = true;
              startRatio = this[optionName].series[params.seriesIndex].pieData.startRatio;
              endRatio = this[optionName].series[params.seriesIndex].pieData.endRatio;
              k = this[optionName].series[params.seriesIndex].pieStatus.k;
              // 对当前点击的扇形，执行高亮操作（对 option 更新）
              console.log(
                ' this[optionName].series[params.seriesIndex].pieData',
                this[optionName].series[params.seriesIndex].pieData,
              );
              this[optionName].series[params.seriesIndex].parametricEquation =
                getParametricEquation(
                  startRatio,
                  endRatio,
                  isSelected,
                  isHovered,
                  k,
                  this[optionName].series[params.seriesIndex].pieData.value + 60,
                );
              this[optionName].series[params.seriesIndex].pieStatus.hovered = isHovered;
              // 记录上次高亮的扇形对应的系列号 seriesIndex
              hoveredIndex = params.seriesIndex;
            }
            // 使用更新后的 option，渲染图表
            myChart.setOption(this[optionName]);
          }
        });
        // 修正取消高亮失败的 bug
        myChart.on('globalout', () => {
          // 准备重新渲染扇形所需的参数
          let isSelected;
          let isHovered;
          let startRatio;
          let endRatio;
          let k;
          if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected = this[optionName].series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            k = this[optionName].series[hoveredIndex].pieStatus.k;
            startRatio = this[optionName].series[hoveredIndex].pieData.startRatio;
            endRatio = this[optionName].series[hoveredIndex].pieData.endRatio;
            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            this[optionName].series[hoveredIndex].parametricEquation = getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k,
              this[optionName].series[hoveredIndex].pieData.value,
            );
            this[optionName].series[hoveredIndex].pieStatus.hovered = isHovered;
            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = '';
          }
          // 使用更新后的 option，渲染图表
          myChart.setOption(this[optionName]);
        });
      },
      // 自适应宽高
      changeSize() {
        this.statusChart.resize();
      },
      show() {
        console.log('切换时我调用了', this.ringData);
        this.setLabel();
        this.initChart();
        // const that = this
        // window.onresize = function () {
        //   that.changeSize()
        // }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../../assets/cockpit2/ehcarts-bg.png') no-repeat center 0.52rem;
    background-size: 100% 80%;
    // transform: translateX(-50%);
    .chart {
      width: 100%;
      height: 100%;
    }

    .bg {
      position: absolute;
      bottom: 50px;
      left: 50%;
      z-index: -1;
      width: 180px;
      height: 73px;
      background: no-repeat center;
      background-image: url('../../assets/cockpit2/chart-bg.png');
      background-size: 100% 100%;
      transform: translateX(-50%);
      border: 1px solid gold;
    }
  }
</style>
