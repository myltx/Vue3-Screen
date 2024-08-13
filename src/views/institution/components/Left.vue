<script setup lang="ts">
  import { equipmentOption } from '../config';
  import NORMAL_IMG from '@/assets/images/business/normal.png';
  import MIDDLE_IMG from '@/assets/images/business/middle.png';
  import HEIGHT_IMG from '@/assets/images/business/height.png';

  import DZG_IMG from '@/assets/images/institution/dzg.png';
  import WYS_IMG from '@/assets/images/institution/dys.png';
  import YZG_IMG from '@/assets/images/institution/dzg.png';

  import dayjs from 'dayjs';
  import { page, detail, getAlarmList } from '@/api/institution/institution';
  import yhDetailModel from './yhDetailModel.vue';
  import detailModel from './detailModel.vue';
  import decryptString from '@/utils/jnpf';
  import { getFileUrl } from '@/utils';
  const route = useRoute();
  const loading = ref(false);

  type ClickType = 'equipment';
  interface AlarmListType {
    content: number | string;
    status: number;
    date: number | string;
    statusText: number | string;
    subscribe: number | string;
    name?: string;
    dangerId?: string;
    alarmId?: string;
    alarmName?: string;
  }

  const statusImgMap: {
    [key in number]: string;
  } = {
    4: NORMAL_IMG,
    3: MIDDLE_IMG,
    2: HEIGHT_IMG,
  };
  const statusHiddenImgMap: {
    [key in number]: string;
  } = {
    1: DZG_IMG,
    2: WYS_IMG,
    3: YZG_IMG,
  };
  const statusClass: {
    [key in number]: string;
  } = {
    4: 'normal',
    3: 'middle',
    2: 'height',
  };
  const statusHiddenClass: {
    [key in number]: string;
  } = {
    1: 'dzg',
    2: 'wys',
    3: 'yzg',
  };

  const equipmentActive = ref(0);
  const option = ref({});
  const alarmList = ref<AlarmListType[]>([]);
  const imgList = ref<any>([]);
  const hiddenList = ref<any>([]);
  const isVisible = ref<boolean>(false);
  const isAlarmVisible = ref<boolean>(false);
  const yhDetailData = ref<any>({});
  const yhData = ref<any>({});
  const gjDetailData = ref<any>({});
  async function getPageList() {
    hiddenList.value = [];
    const statusTextMap: {
      [key in number]: string;
    } = {
      1: '待整改',
      2: '待验收',
      3: '已整改',
    };
    let res: any = await page({ currentPage: 1, pageSize: 20 }, route.query.orgId);
    if (res.code == 200) {
      hiddenList.value = res?.data?.dangerPageVOList || [];
    }
    if (hiddenList.value.length) {
      hiddenList.value.map((item: any) => {
        alarmList.value.push({
          content: `【隐患描述】${item?.dangerRemark || ''}`,
          date: dayjs(item.reportingTime).format('YYYY-MM-DD HH:mm:ss'),
          subscribe: item?.placeName,
          statusText: statusTextMap[item.reportingStatus],
          status: item.reportingStatus,
          name: decryptString(item?.creator?.encryptVal || '', 'ch20210825093727'),
          dangerId: item?.dangerId,
        });
      });
    }
  }
  generateList();
  async function generateList() {
    loading.value = true;
    alarmList.value = [];
    hiddenList.value = [];
    const statusTextMap: {
      [key in number]: string;
    } = {
      4: '普通告警',
      3: '重要告警',
      2: '紧急告警',
    };
    let res: any = await getAlarmList(
      { currentPage: 1, pageSize: 20, processStatus: 0 },
      route.query.orgId,
    );
    if (res.code == 200) {
      hiddenList.value = res.data || [];
    }
    if (hiddenList.value.length) {
      hiddenList.value.map((item: any) => {
        alarmList.value.push({
          content: `设备：${item.iotName}`,
          date: item.eventTime,
          subscribe: item?.placeName,
          statusText: statusTextMap[item.param],
          status: item.param,
          alarmId: item?.alarmId,
          alarmName: item?.alarmName,
        });
      });
    }
    loading.value = false;
  }
  function handleClose(val: boolean) {
    isVisible.value = val;
  }
  function handleAlarmClose(val: boolean) {
    isAlarmVisible.value = val;
  }
  function success() {
    generateList();
  }
  async function handleListClick(item: any) {
    if (equipmentActive.value == 0) {
      gjDetailData.value = item;
      isAlarmVisible.value = true;
    } else {
      imgList.value = [];
      let res: any = await detail({ dangerId: item.dangerId });
      yhDetailData.value = res.data;
      let imgTempList = JSON.parse(yhDetailData.value?.sffFireDangerDTO?.dangerFile) || [];
      if (imgTempList.length) {
        imgTempList.map((item: any) => {
          if (item.url) {
            imgList.value.push(getFileUrl(item.url));
          }
        });
      }
      yhData.value = item;
      isVisible.value = true;
      console.log(imgList.value, 'imglist');
    }
    // openMapModal.value = true
  }

  const handleType = (type: ClickType, value: number) => {
    equipmentActive.value = value;
    alarmList.value = [];
    if (value == 1) {
      getPageList();
    } else {
      generateList();
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
    <BasicBox :title="'告警/隐患记录'" :height="'570px'">
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
      <div class="scroll" v-if="alarmList.length">
        <div
          :class="['item', equipmentActive == 1 ? 'newItem' : '']"
          v-for="(item, index) in alarmList"
          :key="index"
        >
          <div @click="handleListClick(item)">
            <div class="item-top">
              <div class="left-title">
                <img :src="statusImgMap[item.status]" alt="" v-if="equipmentActive == 0" />
                <img :src="statusHiddenImgMap[item.status]" alt="" v-if="equipmentActive == 1" />
                <span :class="statusClass[item.status]" v-if="equipmentActive == 0">{{
                  item.statusText
                }}</span>
                <span :class="statusHiddenClass[item.status]" v-if="equipmentActive == 1">{{
                  item.statusText
                }}</span>
              </div>
              <div class="time">{{ item.date }}</div>
            </div>
            <div class="item-content text-ellipsis">
              {{ item.content }}
            </div>
            <div class="item-subscribe" v-if="equipmentActive == 1"> 上报人：{{ item.name }} </div>
            <div class="item-subscribe">
              {{ item.subscribe }}
            </div>
          </div>
        </div>
      </div>
      <Empty
        v-else-if="loading || !alarmList.length"
        :text="loading ? '数据加载中...' : '暂无数据'"
        class="mt-20px"
      />
    </BasicBox>
  </div>
  <yhDetailModel
    :isVisible="isVisible"
    @close-model="handleClose"
    :yhDetailData="yhDetailData"
    :yhData="yhData"
    :imgList="imgList"
  />
  <detailModel
    :isVisible="isAlarmVisible"
    @close-model="handleAlarmClose"
    @success="success"
    :gjDetailData="gjDetailData"
  />
</template>

<style scoped lang="scss">
  @import './styles/left.scss';
</style>
