<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import MapIconImg from '@/assets/images/map/map-icon.png';

  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  startLoading();
  const pageKey = 'homePage';
  const moduleKeys: ModuleKeyType = {
    homePage: ['safetySystem-消防安全制度建设'],
  };
  const open = ref(false);
  const { getALlModuleData } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  getALlModuleData(pageKey, moduleKeys, endLoading);
  const markerList = ref<
    {
      [key: string]: any;
    }[]
  >([
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
    open.value = true;
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
