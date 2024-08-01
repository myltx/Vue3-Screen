<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import MapIconImg from '@/assets/images/map/map-icon.png';

  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  startLoading();
  const moduleKeys: ModuleKeyType = {
    homePage: [
      'safetySystem-消防安全制度建设',
      'fireAwarenessEquipment-消防设施设备（消防感知设备）',
      'fireFightingEquipment-消防设施设备（消防器材）',
      'fireAwarenessEquipmentType-设备类型统计（消防感知设备）',
      'fireFightingEquipmentType-设备类型统计（消防器材）',
      'realTimeVideo-实时视频联动',
      'clockIn-值班打卡',
      'fireDrillAndTraining-消防演练与培训',
      'fireWarningAnalysis-消防预警分析',
      'safetyHazardRectification-安全隐患整改',
      'fireSafetynspection-消防安全检查',
      'keepWatch-巡更(消防安全检查）',
      'inspection-巡检(消防安全检查）',
      'topCenter-顶部中间',
      'map-地图',
      'toBeUploadedOrg-待上传机构（消防安全制度建设弹框）',
      'unsolvedHiddenDanger-未解决隐患（安全隐患整改弹框）',
      'noTrainingInstitutionsWereOrg-近半年未组织培训机构（消防演练弹框）',
      'needToBeImprovedOrg-待完善机构（消防安全制度建设弹框）',
      'punchedMechanismsOrg-已打卡机构数（值班打卡弹框）',
      'nearlyThreeDaysOrg-近3日未巡更机构（消防安全检查弹框）',
      'haveAlreadyOrg-已上传机构（消防安全制度建设弹框）',
      'nearlyOneMonthsOrg-近一月未巡更机构（消防安全检查弹框）',
      'dutyHasBeenCompleted-已完成值班人次（值班打卡弹框）',
      'totalHiddenDangerRectification-累计发现隐患（安全隐患整改弹框）',
    ],
  };
  const open = ref(false);
  const { getALlModuleData } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  getALlModuleData(moduleKeys, endLoading);
  const markerList = ref<{ [key: string]: any }[]>([
    {
      name: '测试点',
      lat: 39.915185,
      lng: 116.403901,
      icon: MapIconImg,
    },
    {
      name: '测试点1',
      lat: 39.811593,
      lng: 116.396226,
      icon: MapIconImg,
    },
  ]);
  setTimeout(() => {
    // open.value = true;
  }, 2000);
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left v-if="!isLoading" v-motion-slide-left />
    <Right v-if="!isLoading" v-motion-slide-right />
    <Bottom v-if="!isLoading" v-motion-slide-visible-bottom />
    <Map class="map" :markerList="markerList" />
    <Loading class="loading" />
    <BasicModal v-model:modalValue="open" />
  </PageWrapper>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
  .map {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
