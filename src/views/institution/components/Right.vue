<script setup lang="ts">
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
  import { equipmentOption } from '../config';
  import NORMAL_IMG from '@/assets/images/business/normal.png';
  import MIDDLE_IMG from '@/assets/images/business/middle.png';
  import HEIGHT_IMG from '@/assets/images/business/height.png';
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

  const settingStore = useSettingStore();
  const { indexConfig } = storeToRefs(settingStore);

  const statusImgMap: {
    [key in number]: string;
  } = {
    1: NORMAL_IMG,
    2: MIDDLE_IMG,
    3: HEIGHT_IMG,
  };
  const statusClass: {
    [key in number]: string;
  } = {
    1: 'normal',
    2: 'middle',
    3: 'height',
  };

  const isScroll = computed(() => {
    return indexConfig.value.rightBottomSwiper;
  });
  const equipmentActive = ref(0);
  const option = ref({});
  const chartRef = ref(null); // 用于引用图表实例
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
        setOption('option', equipmentOption);
        break;

      default:
        break;
    }
  };
  const setOption = (key: string, opt: any) => {
    switch (key) {
      case 'option':
        option.value = {};
        setTimeout(() => {
          option.value = opt;
        }, 1000);
        break;

      default:
        break;
    }
  };

  onMounted(() => {
    setOption('option', equipmentOption);
  });
</script>

<template>
  <div class="container-right mt-22px mr-16px">
    <BasicBox :title="'消防安全检查'" style="height: 350px">
      <div class="top-container">
        <div class="left-container">
          <img src="@/assets/images/institution/ljxg.png" alt="" />
          <div>
            <div class="title">累计巡更</div>
            <div class="number">206</div>
          </div>
        </div>
        <div class="left-container">
          <img src="@/assets/images/institution/ljxj.png" alt="" />
          <div>
            <div class="title">累计巡更</div>
            <div class="number">206</div>
          </div>
        </div>
      </div>
      <div class="equipment-top">
        <div
          :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
          @click="handleType('equipment', 0)"
        >
          巡更情况
        </div>
        <div
          :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
          @click="handleType('equipment', 1)"
        >
          巡检情况
        </div>
      </div>

      <div class="chart-container">
        <div class="tip-container">当前巡更情况</div>
      </div>
    </BasicBox>
    <BasicBox :title="'安全隐患整改'" style="height: 280px">
      <div class="chart-container safe-container">
        <div class="bar-chart-title">超期一个月未整改</div>
        <span>16</span>
        <div class="pie-container"> </div>
      </div>
    </BasicBox>
    <BasicBox :title="'实时视频联动'">
      <span class="more-tip">更多></span>
      <div class="video-container">
        <img src="@/assets/images/institution/video.png" alt="" />
        <img src="@/assets/images/institution/video.png" alt="" />
        <img src="@/assets/images/institution/video.png" alt="" />
        <img src="@/assets/images/institution/video.png" alt="" />
      </div>
    </BasicBox>
  </div>
</template>

<style scoped lang="scss">
  @import './styles/right.scss';
</style>
