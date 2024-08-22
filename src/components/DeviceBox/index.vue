<script setup lang="ts">
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { getEquipmentOption } from '@/views/cockpit/config';

  import * as echarts from 'echarts';

  interface Props {
    moduleKeys: string[];
  }

  const props = defineProps<Props>();
  const { moduleKeys } = unref(props);
  let myChart: any = null;

  const { getModuleName, getValue, getSubtModuleName } = useCockpitDataStore();

  const equipmentActive = ref(0);
  const option = ref({});

  const handleType = (value: number) => {
    equipmentActive.value = value;
    setOption();
  };
  const setOption = () => {
    myChart && myChart.clear();
    let data = [];
    let yData = [];
    let xData = [];
    if (equipmentActive.value == 1) {
      data = getValue(moduleKeys[1], 0);
    } else {
      data = getValue(moduleKeys[0], 0);
    }
    yData = data.map((item: { [key: string]: string | number }) => item.value);
    xData = data.map((item: { [key: string]: string | number }) => item.name);
    setTimeout(() => {
      option.value = getEquipmentOption(xData, yData);
      myChart && myChart.setOption(option.value);
    }, 500);
  };
  function initChart() {
    var dom: any = document.getElementById('barChart');
    myChart = echarts.init(dom);
    setOption();
  }

  onMounted(() => {
    nextTick(() => {
      initChart();
    });
  });
</script>

<template>
  <BasicBox :title="getModuleName('fireAwarenessEquipment')">
    <div class="equipment-top">
      <div
        :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
        @click="handleType(0)"
      >
        {{ getSubtModuleName('fireAwarenessEquipment') }}
      </div>
      <div
        :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
        @click="handleType(1)"
      >
        {{ getSubtModuleName('fireFightingEquipment') }}
      </div>
    </div>

    <div class="value-container" v-show="equipmentActive == 0">
      <div class="value-item">
        在线
        <div class="value text-#3bdff6">
          {{
            getValue(equipmentActive == 0 ? 'fireAwarenessEquipment' : 'fireFightingEquipment', 0)
          }}
        </div>
      </div>
      <div class="value-item placeholder">
        故障
        <div class="value text-#E3B026">
          {{
            getValue(equipmentActive == 0 ? 'fireAwarenessEquipment' : 'fireFightingEquipment', 1)
          }}
        </div>
      </div>
      <div class="value-item">
        离线
        <div class="value text-#DD5858">
          {{
            getValue(equipmentActive == 0 ? 'fireAwarenessEquipment' : 'fireFightingEquipment', 2)
          }}
        </div>
      </div>
    </div>
    <div :class="['chart-container', equipmentActive == 1 ? 'pt-30px' : '']">
      <div class="bar-chart-title">
        <div>设备类型统计</div>
      </div>
      <div class="bar-chart-unit">单位: <span>台</span></div>
      <div id="barChart"></div>
    </div>
  </BasicBox>
</template>

<style scoped lang="scss">
  // 设备
  .equipment-top {
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .equipment-item {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 100%;
      flex: 1;
      background: url('@/assets/images/business/equipment-tag-bg.png') no-repeat;
      background-size: 100% 100%;
      &.active {
        background: url('@/assets/images/business/equipment-tag-bg-active.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .value-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    .value-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
      text-align: left;
      font-style: normal;
      &.placeholder {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 2px;
          height: 20px;
          background: linear-gradient(
            180deg,
            rgba(114, 218, 245, 0) 0%,
            #72daf5 46%,
            rgba(114, 218, 245, 0) 100%
          );
          margin: 0 5px;
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 20px;
          background: linear-gradient(
            180deg,
            rgba(114, 218, 245, 0) 0%,
            #72daf5 46%,
            rgba(114, 218, 245, 0) 100%
          );
          margin: 0 5px;
        }
      }
      .value {
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-align: left;
        font-style: normal;
        margin-left: 5px;
      }
    }
  }
  .chart-container {
    margin-top: 10px;
    height: 70%;
    position: relative;
    .bar-chart-title {
      text-indent: 35px;
      height: 28px;
      width: 206px;
      background: url('@/assets/images/business/equipment-chart-title-bg.png') no-repeat;
      background-size: 100% 100%;
      font-family: PangMenZhengDao, PangMenZhengDao;
      font-weight: normal;
      font-size: 18px;
      color: #ffffff;
      line-height: 28px;
      text-align: left;
      font-style: normal;
      position: absolute;
      top: 0;
      z-index: 9999;
      div {
        background: linear-gradient(to top, #ffffff, #1f8dcb);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .bar-chart-unit {
      position: absolute;
      top: 5px;
      right: 0;
      z-index: 9999;
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.45);
      line-height: 18px;
      text-align: right;
      font-style: normal;
      span {
        color: #fff;
      }
    }
    #barChart {
      height: 100%;
      width: 100%;
    }
  }
</style>
