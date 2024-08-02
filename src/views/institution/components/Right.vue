<script setup lang="ts">
<<<<<<< HEAD
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
  import { equipmentOption } from '../config';
  import NORMAL_IMG from '@/assets/images/business/normal.png';
  import MIDDLE_IMG from '@/assets/images/business/middle.png';
  import HEIGHT_IMG from '@/assets/images/business/height.png';
  import dayjs from 'dayjs';
  import { useSettingStore } from '@/stores/setting/setting';
  import Ring from '@/components/3dpie/index2.vue';
  import { color } from '@/components/3dpie/data.js';

  type ClickType = 'equipment';
=======
  import dayjs from 'dayjs';

>>>>>>> 90494fda88e83544b0bd70f102278e3933f36881
  interface AlarmListType {
    content: number | string;
    status: number;
    date: number | string;
    statusText: number | string;
    subscribe: number | string;
  }

<<<<<<< HEAD
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
=======
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

  const handleType = (value: number) => {
    equipmentActive.value = value;
  };
>>>>>>> 90494fda88e83544b0bd70f102278e3933f36881
</script>

<template>
  <div class="container-right mt-22px mr-16px">
<<<<<<< HEAD
    <!-- <BasicBox :title="'消防安全制度建设'">
      <div class="w-full h-full">
        <div class="flex justify-center items-center w-full">
          <div class="flex-1">
            <img
              src="@/assets/images/business/institution.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">消防安全制度</div>
          </div>
          <div class="flex-1">
            <img
              src="@/assets/images/business/duty.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">岗位安全责任书</div>
          </div>
          <div class="flex-1">
            <img
              src="@/assets/images/business/pre-plan.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">应急预案</div>
          </div>
        </div>
        <div class="flex space-between items-center w-full">
          <div class="flex-1 file-info">
            <div class="left-text">
              <div class="info-title">已上传</div>
              <div class="info-value">21</div>
              <div class="info-unit">家</div>
            </div>
            <div class="placeholder"></div>
            <div class="left-text">
              <div class="info-title">已上传</div>
              <div class="info-value">21</div>
              <div class="info-unit">家</div>
            </div>
          </div>
          <div class="flex-1 file-info mx-10px">
            <div class="left-text">
              <div class="info-title">已上传</div>
              <div class="info-value">21</div>
              <div class="info-unit">家</div>
            </div>
            <div class="placeholder"></div>
            <div class="left-text">
              <div class="info-title">已上传</div>
              <div class="info-value">21</div>
              <div class="info-unit">家</div>
            </div>
          </div>
          <div class="flex-1 file-info">
            <div class="left-text">
              <div class="info-title">已上传</div>
              <div class="info-value">21</div>
              <div class="info-unit">家</div>
            </div>
            <div class="placeholder"></div>
            <div class="left-text">
              <div class="info-title">已上传</div>
              <div class="info-value">21</div>
              <div class="info-unit">家</div>
            </div>
          </div>
        </div>
      </div>
    </BasicBox> -->
=======
>>>>>>> 90494fda88e83544b0bd70f102278e3933f36881
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
<<<<<<< HEAD
          @click="handleType('equipment', 0)"
=======
          @click="handleType(0)"
>>>>>>> 90494fda88e83544b0bd70f102278e3933f36881
        >
          巡更情况
        </div>
        <div
          :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
<<<<<<< HEAD
          @click="handleType('equipment', 1)"
=======
          @click="handleType(1)"
>>>>>>> 90494fda88e83544b0bd70f102278e3933f36881
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
<<<<<<< HEAD
      </div>
    </BasicBox>
    <BasicBox :title="'实时视频联动'">
      <span class="more-tip">更多></span>
      <div class="video-container">
        <img src="@/assets/images/institution/video.png" alt="" />
        <img src="@/assets/images/institution/video.png" alt="" />
        <img src="@/assets/images/institution/video.png" alt="" />
        <img src="@/assets/images/institution/video.png" alt="" />
=======
>>>>>>> 90494fda88e83544b0bd70f102278e3933f36881
      </div>
    </BasicBox>
    <VideoBox />
  </div>
</template>

<style scoped lang="scss">
  @import './styles/right.scss';
</style>
