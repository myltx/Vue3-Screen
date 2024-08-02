<script setup lang="ts">
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
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
        break;

      default:
        break;
    }
  };

  onMounted(() => {});
</script>

<template>
  <div class="container-right mt-22px mr-16px">
    <BasicBox :title="'消防安全检查'" style="height: 360px;">
      <div class="top-container">
        <div class="left-container">
          <img src="@/assets/images/institution/ljxg.png" alt="">
          <div>
            <div class="title">
              <span class="number">6</span>
              <span class="tip">家</span>
            </div>
            <div class="tip">近3日未巡更机构</div>
          </div>
        </div>
        <div class="left-container">
          <img src="@/assets/images/institution/ljxj.png" alt="">
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
        <div :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
          @click="handleType('equipment', 0)">
          巡更
        </div>
        <div :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
          @click="handleType('equipment', 1)">
          巡检
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/rws.png" alt="" class="img">
          <span class="tip">累计巡更任务数</span>
        </div>
        <div>
          <span class="number">1254</span>
          <span class="dw">次</span>
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/wcs.png" alt="" class="img">
          <span class="tip">累计巡更完成数</span>
        </div>
        <div>
          <span class="number">1098</span>
          <span class="dw">次</span>
        </div>
      </div>
      <div class="bottom-container">
        <div>
          <img src="@/assets/images/business/yqs.png" alt="" class="img">
          <span class="tip">累计巡更逾期数</span>
        </div>
        <div>
          <span class="number font3">148</span>
          <span class="dw">次</span>
        </div>
      </div>
      <!-- <div class="value-container">
        <div class="value-item"> 在线 <div class="value text-#3bdff6">256</div>
        </div>
        <div class="value-item placeholder"> 故障 <div class="value text-#E3B026">256</div>
        </div>
        <div class="value-item"> 离线 <div class="value text-#DD5858">256</div>
        </div>
      </div> -->
      <!-- <div class="chart-container">
        <div class="tip-container">当前巡更情况</div>
      </div> -->
    </BasicBox>
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
    <BasicBox :title="'安全隐患整改'" style="height: 270px;">
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
            <img src="@/assets/images/business/dot.png" alt="" class="img">
          </div>
        </div>
        <div class="tip-container">
          <span class="text1">已完成整改</span>
          <span class="text2">36</span>
          <span class="text3">81%</span>
        </div>
        <div class="footer-container">
          <img src="@/assets/images/business/yhzg.png" alt="" class="img">
          <span class="left">超期1个月未解决隐患</span>
          <span class="middle">12</span>
          <span class="right">条</span>
        </div>
      </div>
      <!-- <div class="equipment-top">
        <div
          :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
          @click="handleType('equipment', 0)"
        >
          消防感知设备(267)
        </div>
        <div
          :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
          @click="handleType('equipment', 1)"
        >
          消防器材(432)
        </div>
      </div>

      <div class="value-container">
        <div class="value-item"> 在线 <div class="value text-#3bdff6">256</div> </div>
        <div class="value-item placeholder"> 故障 <div class="value text-#E3B026">256</div> </div>
        <div class="value-item"> 离线 <div class="value text-#DD5858">256</div> </div>
      </div>
      <div class="chart-container">
        <div class="bar-chart-title">设备类型统计</div>
        <div class="bar-chart-unit">单位: <span>台</span></div>
        <v-chart
          class="chart"
          ref="chartRef"
          id="bar-chart"
          :option="option"
          v-if="Object.keys(option).length"
        />
      </div> -->
    </BasicBox>
    <BasicBox :title="'告警'">
      <div class="scroll">
        <vue3-seamless-scroll :list="alarmList" hover v-model="isScroll" :limitScrollNum="2">
          <div class="item" v-for="(item, index) in alarmList" :key="index">
            <div class="item-top">
              <div class="left-title">
                <img :src="statusImgMap[item.status]" alt="" />
                <span :class="statusClass[item.status]">{{ item.statusText }}</span>
              </div>
              <div class="time">{{ item.date }}</div>
            </div>
            <div class="item-content">
              {{ item.content }}
            </div>
            <div class="item-subscribe">
              {{ item.subscribe }}
            </div>
          </div>
        </vue3-seamless-scroll>
      </div>
    </BasicBox>
  </div>
</template>

<style scoped lang="scss">
  @import './styles/right.scss';
</style>
