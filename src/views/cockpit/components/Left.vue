<script setup lang="ts">
  import dayjs from 'dayjs';
  // import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';

  interface AlarmListType {
    content: number | string;
    status: number;
    date: number | string;
    statusText: number | string;
    subscribe: number | string;
  }
  const parentData = inject('data') as ParentDataType;
  const { showMore } = parentData;

  const { getModuleName, getValue, getName } = useCockpitDataStore();

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
    <BasicBox :title="getModuleName('safetySystem')" :height="'235px'">
      <div class="w-full h-full">
        <div class="flex justify-center items-center w-full">
          <div class="flex-1">
            <img
              src="@/assets/images/business/institution.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">
              <div>{{ getName('safetySystem', 0) }}</div>
            </div>
          </div>
          <div class="flex-1">
            <img
              src="@/assets/images/business/duty.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">
              <div>{{ getName('safetySystem', 1) }}</div>
            </div>
          </div>
          <div class="flex-1">
            <img
              src="@/assets/images/business/pre-plan.png"
              alt=""
              class="h-90px w-90px mb-10px mx-auto"
            />
            <div class="text">
              <div>{{ getName('safetySystem', 2) }}</div>
            </div>
          </div>
        </div>
        <div class="flex space-between items-center w-full">
          <div class="flex-1 file-info">
            <div class="left-text">
              <div class="info-value text-#00E3F8 cursor-pointer" @click="showMore(0)">
                <CountUp :startVal="0" :end-val="getValue('safetySystem', 0)" />
              </div>
              <div class="info-unit">家</div>
            </div>
          </div>
          <div class="flex-1 file-info mx-10px">
            <div class="flex-1 left-text">
              <div class="info-value text-#FF5151 cursor-pointer" @click="showMore(1)">
                <CountUp :startVal="0" :end-val="getValue('safetySystem', 1)" />
              </div>
              <div class="info-unit">家</div>
            </div>
          </div>
          <div class="flex-1 file-info">
            <div class="left-text">
              <div class="info-value text-#FFBA00 cursor-pointer" @click="showMore(2)">
                <CountUp :startVal="0" :end-val="getValue('safetySystem', 2)" />
              </div>
              <div class="info-unit">家</div>
            </div>
          </div>
        </div>
      </div>
    </BasicBox>
    <DeviceBox :module-keys="['fireAwarenessEquipmentType', 'fireFightingEquipmentType']" />
    <BasicBox :title="'实时动态'" :height="'235px'">
      <AutoScrollTable
        :headers="[
          {
            key: 'content',
            title: '内容',
            style: {},
          },
          {
            key: 'date',
            title: '时间',
            style: {},
          },
        ]"
        :rows="alarmList"
        :interval="1000"
        :step="0.5"
      />
    </BasicBox>
    <!-- <VideoBox /> -->
    <!-- 展开 -->
    <!-- <div class="position-absolute top-30% right--30px z-999 text-red text-30px b-1px b-red">
      <DoubleLeftOutlined />
      <DoubleRightOutlined />
    </div> -->
  </div>
</template>

<style scoped lang="scss">
  @import './styles/left.scss';
</style>
