<script setup lang="ts">
  import dayjs from 'dayjs';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { default_chart_colors } from '@/helper';

  const parentData = inject('data') as ParentDataType;
  const { showMore } = parentData;
  const { getModuleName, getValue, getName } = useCockpitDataStore();
  const threeChartRef = ref();
  const forewarningList = ref(getValue('fireWarningAnalysis', 0));

  type ClickType = 'equipment';
  interface AlarmListType {
    content: number | string;
    status: number;
    date: number | string;
    statusText: number | string;
    subscribe: number | string;
  }

  const equipmentActive = ref(0);
  const alarmList = ref<AlarmListType[]>([]);

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

  const handleType = (type: ClickType, value: number) => {
    switch (type) {
      case 'equipment':
        equipmentActive.value = value;
        break;

      default:
        break;
    }
  };

  function getScale(): string {
    const allNum = getValue('safetyHazardRectification', 0) || 0;
    const num = getValue('safetyHazardRectification', 1) || 0;

    return ((num / allNum) * 100).toFixed(2);
  }

  function getBoxScale(scale: string) {
    if (Number(scale) >= 50) {
      return 50;
    } else {
      return Number(scale);
    }
  }

  onMounted(() => {
    forewarningList.value?.forEach((item: any, index: number) => {
      item.itemStyle = {
        color: default_chart_colors[index],
      };
      item.value = item.value * 1;
    });
    threeChartRef.value.initChart(forewarningList.value);
  });
</script>

<template>
  <div class="container-right mt-22px mr-16px">
    <BasicBox :title="getModuleName('fireSafetynspection')" style="height: 360px">
      <div class="top-container">
        <div class="left-container">
          <img src="@/assets/images/institution/ljxg.png" alt="" />
          <div>
            <div class="title">
              <span class="number cursor-pointer" @click="showMore(3)">{{
                getValue('fireSafetynspection', 0)
              }}</span>
              <span class="tip">家</span>
            </div>
            <div class="tip">{{ getName('fireSafetynspection', 0) }}</div>
          </div>
        </div>
        <div class="left-container">
          <img src="@/assets/images/institution/ljxj.png" alt="" />
          <div>
            <div class="title">
              <span class="number cursor-pointer" @click="showMore(4)">{{
                getValue('fireSafetynspection', 1)
              }}</span>
              <span class="tip">家</span>
            </div>
            <div class="tip">{{ getName('fireSafetynspection', 1) }}</div>
          </div>
        </div>
      </div>
      <div class="equipment-top">
        <div
          :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
          @click="handleType('equipment', 0)"
        >
          巡更
        </div>
        <div
          :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
          @click="handleType('equipment', 1)"
        >
          巡检
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/rws.png" alt="" class="img" />
          <span class="tip">
            {{ getName(equipmentActive == 0 ? 'keepWatch' : 'inspection', 0) }}
          </span>
        </div>
        <div>
          <span class="number">
            {{ getValue(equipmentActive == 0 ? 'keepWatch' : 'inspection', 0) }}
          </span>
          <span class="dw">次</span>
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/wcs.png" alt="" class="img" />
          <span class="tip">
            {{ getName(equipmentActive == 0 ? 'keepWatch' : 'inspection', 1) }}
          </span>
        </div>
        <div>
          <span class="number">
            {{ getValue(equipmentActive == 0 ? 'keepWatch' : 'inspection', 1) }}
          </span>
          <span class="dw">次</span>
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/yqs.png" alt="" class="img" />
          <span class="tip">
            {{ getName(equipmentActive == 0 ? 'keepWatch' : 'inspection', 2) }}
          </span>
        </div>
        <div>
          <span class="number font3">
            {{ getValue(equipmentActive == 0 ? 'keepWatch' : 'inspection', 2) }}
          </span>
          <span class="dw">次</span>
        </div>
      </div>
    </BasicBox>
    <BasicBox :title="getModuleName('safetyHazardRectification')" style="height: 270px">
      <div class="safe-container">
        <span class="title">
          <div>隐患整改</div>
        </span>
        <div class="right-container">
          <span class="left">{{ getName('safetyHazardRectification', 0) }}</span>
          <span class="middle cursor-pointer" @click="showMore(7)">
            {{ getValue('safetyHazardRectification', 0) }}
          </span>
          <span class="right">条</span>
        </div>
      </div>
      <div class="progress-container position-relative">
        <div class="main">
          <div
            class="loading"
            :style="{
              width: getScale() + '%',
            }"
          >
            <img
              src="@/assets/images/business/dot.png"
              alt=""
              class="im position-absolute top--5px"
              :style="{
                left: getScale() + '%',
              }"
            />
            <div
              class="up-arrow"
              :style="{
                left: (Number(getScale()) >= 50 ? Number('-1') : -1) + Number(getScale()) + '%',
              }"
            ></div>
            <div
              class="up-arrow-border"
              :style="{
                left: (Number(getScale()) >= 50 ? Number('-0.5') : -0.8) + Number(getScale()) + '%',
              }"
            ></div>
          </div>
        </div>

        <div
          class="tip-container"
          :style="{
            left:
              (Number(getScale()) >= 50 ? Number('-12') : -3) +
              Number(getBoxScale(getScale())) +
              '%',
          }"
        >
          <span class="text1">{{ getName('safetyHazardRectification', 1) }}</span>
          <span class="text2">{{ getValue('safetyHazardRectification', 1) }}</span>
          <span class="text3">{{ getScale() }}%</span>
        </div>
        <div class="footer-container flex items-center justify-between">
          <div class="flex items-center w-63%">
            <img src="@/assets/images/business/yhzg.png" alt="" class="img" />
            <span class="left">{{ getName('safetyHazardRectification', 2) }}</span>
          </div>
          <div class="flex items-center justify-end w-40%">
            <span class="middle cursor-pointer w-200px" @click="showMore(8)">
              {{ getValue('safetyHazardRectification', 2) }}
            </span>
            <span class="right mt-10px">条</span>
          </div>
        </div>
      </div>
    </BasicBox>
    <BasicBox :title="getModuleName('fireWarningAnalysis')" :height="'260px'">
      <div class="h-100%">
        <div class="chart-container">
          <div class="bar-chart-title">
            <div class="title-text">{{ getName('fireWarningAnalysis', 1) }}</div>
          </div>
          <div class="bar-chart-unit">{{ getValue('fireWarningAnalysis', 1) }} <span>条</span></div>
        </div>
        <div class="h-90% w-100% flex position-relative">
          <div class="h-100% w-50% three-chart">
            <ThreeChart :isHover="false" ref="threeChartRef" />
          </div>
          <div class="flex items-center justify-center ml-10px flex-wrap w-50% h-50% mt-12%">
            <div
              class="flex items-center justify-center"
              v-for="(item, index) in forewarningList"
              :key="index"
            >
              <div
                class="legend mr-2px w-12px h-12px"
                :style="{
                  background: item?.itemStyle?.color,
                }"
              ></div>
              <div
                class="title text-white text-opacity-80 mr-5px text-12px w-71% text-center"
                :title="item.name"
              >
                {{ item.name.substring(0, 7) }}
              </div>
              <div class="value text-white text-18px w-80px text-right">{{ item.value }}条</div>
            </div>
          </div>
        </div>
      </div>
    </BasicBox>
  </div>
</template>

<style scoped lang="scss">
  @import './styles/right.scss';
</style>
