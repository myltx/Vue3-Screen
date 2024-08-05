<script setup lang="ts">
  import { equipmentOption } from '../config';
  import NORMAL_IMG from '@/assets/images/business/normal.png';
  import MIDDLE_IMG from '@/assets/images/business/middle.png';
  import HEIGHT_IMG from '@/assets/images/business/height.png';
  import dayjs from 'dayjs';
  import { useSettingStore } from '@/stores/setting/setting';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { page,detail } from '@/api/institution/institution'

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
  const { getModuleName, getValue } = useCockpitDataStore();

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
    return indexConfig.value.leftBottomSwiper;
  });
  const openMapModal = ref(false);
  const equipmentActive = ref(0);
  const option = ref({});
  const chartRef = ref(null); // 用于引用图表实例
  const alarmList = ref<AlarmListType[]>([]);
  getPageList()
  async function getPageList(){
    await page({currentPage:1,pageSize:20})
  }
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
  function handleListClick(item:any){
    openMapModal.value = true
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
  <div class="container-left mt-22px ml-16px">
    <DeviceBox :module-keys="['fireAwarenessEquipmentType', 'fireFightingEquipmentType']" />
    <BasicBox :title="'告警/隐患记录'">
      <div class="equipment-top">
        <div
          :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
          @click="handleType('equipment', 0)"
        >
          告警
        </div>
        <div
          :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
          @click="handleType('equipment', 1)"
        >
          隐患
        </div>
      </div>
      <div class="scroll">
        <!-- <vue3-seamless-scroll :list="alarmList" hover v-model="isScroll" :limitScrollNum="2"> -->
        <div class="item" v-for="(item, index) in alarmList" :key="index">
          <div @click="handleListClick(item)">
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
        </div>
        <!-- </vue3-seamless-scroll> -->
      </div>
    </BasicBox>
  </div>
</template>

<style scoped lang="scss">
  @import './styles/left.scss';
</style>
