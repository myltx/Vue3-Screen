<script setup lang="ts">
  import dayjs from 'dayjs';
  import { useSettingStore } from '@/stores/setting/setting';

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

  onMounted(() => {});
</script>

<template>
  <div class="container-right mt-22px mr-16px">
    <BasicBox :title="'消防安全检查'" style="height: 360px">
      <div class="top-container">
        <div class="left-container">
          <img src="@/assets/images/institution/ljxg.png" alt="" />
          <div>
            <div class="title">
              <span class="number">6</span>
              <span class="tip">家</span>
            </div>
            <div class="tip">近3日未巡更机构</div>
          </div>
        </div>
        <div class="left-container">
          <img src="@/assets/images/institution/ljxj.png" alt="" />
          <div>
            <div class="title">
              <span class="number">9</span>
              <span class="tip">家</span>
            </div>
            <div class="tip">近1月未巡检机构</div>
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
          <span class="tip">累计巡更任务数</span>
        </div>
        <div>
          <span class="number">1254</span>
          <span class="dw">次</span>
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/wcs.png" alt="" class="img" />
          <span class="tip">累计巡更完成数</span>
        </div>
        <div>
          <span class="number">1098</span>
          <span class="dw">次</span>
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/yqs.png" alt="" class="img" />
          <span class="tip">累计巡更逾期数</span>
        </div>
        <div>
          <span class="number font3">148</span>
          <span class="dw">次</span>
        </div>
      </div>
    </BasicBox>
    <BasicBox :title="'安全隐患整改'" style="height: 270px">
      <div class="safe-container">
        <span class="title">隐患整改</span>
        <div class="right-container">
          <span class="left">累计发现隐患</span>
          <span class="middle">87</span>
          <span class="right">条</span>
        </div>
      </div>
      <div class="progress-container">
        <div class="main">
          <div class="loading">
            <img src="@/assets/images/business/dot.png" alt="" class="img" />
          </div>
        </div>
        <div class="tip-container">
          <span class="text1">已完成整改</span>
          <span class="text2">36</span>
          <span class="text3">81%</span>
        </div>
        <div class="footer-container">
          <img src="@/assets/images/business/yhzg.png" alt="" class="img" />
          <span class="left">超期1个月未解决隐患</span>
          <span class="middle">12</span>
          <span class="right">条</span>
        </div>
      </div>
    </BasicBox>
    <BasicBox :title="'消防预警分析'">
      <div class="h-100%">
        <div class="chart-container">
          <div class="bar-chart-title">
            <div class="title-text">有效告警</div>
          </div>
          <div class="bar-chart-unit">106 <span>条</span></div>
        </div>
        <div class="h-90% w-100% flex position-relative">
          <div class="h-100% w-50% three-chart">
            <ThreeChart isHover />
          </div>
          <div class="flex items-center justify-center ml-20px flex-wrap w-50% h-50% mt-12%">
            <div class="flex items-center justify-center" v-for="(item, index) in 4" :key="index">
              <div class="legend mr-10px w-8px h-8px bg-#7BFBFD"></div>
              <div class="title text-white text-opacity-80 mr-10px text-14px">安全用电告警</div>
              <div class="value text-white text-18px">60条</div>
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
