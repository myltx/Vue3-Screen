<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import Main from './components/Main.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';

  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  startLoading();
  const moduleKeys: ModuleKeyType = {
    orgPage: [
      'fireAwarenessEquipment-消防设施设备（消防感知设备）',
      'fireFightingEquipment-消防设施设备（消防器材）',
      'fireFightingEquipmentType-设备类型统计（消防器材）',
      'fireAwarenessEquipmentType-设备类型统计（消防感知设备）',
      'realTimeVideo-时视频联动',
      'topCenter-顶部中间',
      'inspection-巡检(消防安全检查）',
      'fireSafetynspection-消防安全检查',
      'keepWatch-巡更(消防安全检查）',
      'giveAnAlarm-告警/隐患记录（告警）',
      'hiddenTrouble-告警/隐患记录（隐患）',
      'dutySituation-消防值班情况',
      'fireDrillAndTraining-消防演练与培训',
      'safetyHazardRectification-安全隐患整改（超期一个月未整改）',
      'safetyHazardRectificationChart-安全隐患整改（chart）',
      'map-中间图片',
    ],
  };
  const open = ref(false);
  const { getALlModuleData } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  getALlModuleData(moduleKeys, endLoading);

  setTimeout(() => {
    open.value = true;
  }, 2000);
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left v-if="!isLoading" v-motion-slide-left />
    <Right v-if="!isLoading" v-motion-slide-right />
    <Bottom v-if="!isLoading" v-motion-slide-visible-bottom />
    <!-- <Map class="map" :markerList="markerList" /> -->
    <Main v-if="!isLoading" />
    <!-- <div class="bg-container">

     </div> -->
    <Loading class="loading" />
    <!-- <BasicModal v-model:modalValue="open" /> -->
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
