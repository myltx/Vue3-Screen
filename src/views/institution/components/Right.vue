<script setup lang="ts">
  import dayjs from 'dayjs';
  import Rang from '../components/echarts/index.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { default_chart_colors } from '@/helper';

  const { getModuleName, getValue, getName, getArray } = useCockpitDataStore();

  interface AlarmListType {
    content: number | string;
    status: number;
    date: number | string;
    statusText: number | string;
    subscribe: number | string;
  }

  const threeChartRef = ref();
  const threeChartRef1 = ref();
  const forewarningList = ref(getArray('keepWatch'));

  const equipmentActive = ref(0);
  const alarmList = ref<AlarmListType[]>([]);

  onMounted(() => {
    console.log(forewarningList.value, 'forewarningList.value');
    forewarningList.value?.forEach((item: any, index: number) => {
      item.itemStyle = {
        color: default_chart_colors[index],
      };
      item.value = item.value * 1;
    });
    threeChartRef.value.initChart(forewarningList.value);
  });
  generateList();
  function generateList() {
    const statusTextMap: {
      [key in number]: string;
    } = {
      1: '普通告警',
      2: '重要告警',
      3: '紧急告警',
    };
    for (let i = 0; i < 11; i++) {
      const status = getRandomInt(1, 3);
      alarmList.value.push({
        content: '设备：13号智能烟感设备',
        subscribe: '厨房餐厅',
        status,
        statusText: statusTextMap[status],
        date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      });
    }
  }
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleType = (value: number) => {
    equipmentActive.value = value;
    console.log(equipmentActive.value, 'equipmentActive.value');
    if (value) {
      forewarningList.value = getArray('inspection');
    } else {
      forewarningList.value = getArray('keepWatch');
    }
    forewarningList.value.forEach((item: any, index: number) => {
      item.itemStyle = {
        color: default_chart_colors[index],
      };
      item.value = item.value * 1;
      if (value) {
        setTimeout(() => {
          threeChartRef1.value.initChart(forewarningList.value);
        }, 100);
      } else {
        setTimeout(() => {
          threeChartRef.value.initChart(forewarningList.value);
        }, 100);
      }
    });
  };
</script>

<template>
  <div class="container-right mt-22px mr-16px">
    <BasicBox :title="getModuleName('fireSafetynspection')" style="height: 350px">
      <div class="top-container">
        <div class="left-container">
          <img src="@/assets/images/institution/ljxg.png" alt="" />
          <div>
            <div class="title">{{ getName('fireSafetynspection', 0) }}</div>
            <div class="number">{{ getValue('fireSafetynspection', 0) }}</div>
          </div>
        </div>
        <div class="left-container">
          <img src="@/assets/images/institution/ljxj.png" alt="" />
          <div>
            <div class="title">{{ getName('fireSafetynspection', 0) }}</div>
            <div class="number">{{ getValue('fireSafetynspection', 1) }}</div>
          </div>
        </div>
      </div>
      <div class="equipment-top">
        <div
          :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
          @click="handleType(0)"
        >
          巡更情况
        </div>
        <div
          :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
          @click="handleType(1)"
        >
          巡检情况
        </div>
      </div>

      <div class="chart-container">
        <div class="h-90% w-100% flex position-relative">
          <div class="h-100% w-50% three-chart">
            <ThreeChart :isHover="false" ref="threeChartRef" v-if="equipmentActive == 0" />
            <ThreeChart :isHover="false" ref="threeChartRef1" v-else />
          </div>
          <div class="flex items-center justify-center ml-20px flex-wrap w-50% h-50% mt-12%">
            <div
              class="flex items-center justify-center"
              v-for="(item, index) in forewarningList"
              :key="index"
            >
              <div
                class="legend mr-5px w-12px h-12px"
                :style="{
                  background: item?.itemStyle?.color,
                }"
              ></div>
              <div class="title text-white text-opacity-80 mr-5px text-14px w-65% text-center">
                {{ item.name }}
              </div>
              <div class="value text-white text-18px w-80px text-right">{{ item.value }}条</div>
            </div>
          </div>
        </div>
      </div>
    </BasicBox>
    <BasicBox :title="getModuleName('safetyHazardRectification')" style="height: 280px">
      <div class="chart-container safe-container">
        <div class="bar-chart-title">
          <div>{{ getName('safetyHazardRectification', 0) }}</div>
        </div>
        <span>{{ getValue('safetyHazardRectification', 0) }}</span>
        <div class="pie-container">
          <Rang :data="getArray('safetyHazardRectificationChart', 3, 1)" />
        </div>
      </div>
    </BasicBox>
    <VideoBox />
  </div>
</template>

<style scoped lang="scss">
  @import './styles/right.scss';
</style>
