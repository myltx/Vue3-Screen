<script setup lang="ts">
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
  import NORMAL_IMG from '@/assets/images/business/normal.png';
  import MIDDLE_IMG from '@/assets/images/business/middle.png';
  import HEIGHT_IMG from '@/assets/images/business/height.png';
  import dayjs from 'dayjs';
  import { useSettingStore } from '@/stores/setting/setting';
  import { useCockpitDataStore } from '@/stores/cockpitData';

  interface AlarmListType {
    content: number | string;
    status: number;
    date: number | string;
    statusText: number | string;
    subscribe: number | string;
  }

  const settingStore = useSettingStore();
  const { indexConfig } = storeToRefs(settingStore);
  const { getModuleName, getValue, getName } = useCockpitDataStore();

  const statusImgMap: { [key in number]: string } = {
    1: NORMAL_IMG,
    2: MIDDLE_IMG,
    3: HEIGHT_IMG,
  };
  const statusClass: { [key in number]: string } = {
    1: 'normal',
    2: 'middle',
    3: 'height',
  };

  const isScroll = computed(() => {
    return indexConfig.value.leftBottomSwiper;
  });
  const alarmList = ref<AlarmListType[]>([]);
  generateList();
  function generateList() {
    const statusTextMap: { [key in number]: string } = {
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
</script>

<template>
  <div class="container-left mt-22px ml-16px">
    <BasicBox :title="getModuleName('safetySystem')">
      <div class="w-full h-full">
        <div class="flex justify-center items-center w-full">
          <div class="flex-1">
            <img
              src="@/assets/images/business/institution.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">{{ getName('safetySystem', 0) }}</div>
          </div>
          <div class="flex-1">
            <img
              src="@/assets/images/business/duty.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">{{ getName('safetySystem', 1) }}</div>
          </div>
          <div class="flex-1">
            <img
              src="@/assets/images/business/pre-plan.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">{{ getName('safetySystem', 2) }}</div>
          </div>
        </div>
        <div class="flex space-between items-center w-full">
          <div class="flex-1 file-info">
            <div class="left-text">
              <div class="info-value text-#00E3F8">{{ getValue('safetySystem', 0) }}</div>
              <div class="info-unit">家</div>
            </div>
          </div>
          <div class="flex-1 file-info mx-10px">
            <div class="flex-1 left-text">
              <div class="info-value text-#FF5151">21</div>
              <div class="info-unit">家</div>
            </div>
          </div>
          <div class="flex-1 file-info">
            <div class="left-text">
              <div class="info-value text-#FFBA00">21</div>
              <div class="info-unit">家</div>
            </div>
          </div>
        </div>
      </div>
    </BasicBox>
    <DeviceBox :module-keys="['fireAwarenessEquipmentType', 'fireFightingEquipmentType']" />
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
  @import './styles/left.scss';
</style>
