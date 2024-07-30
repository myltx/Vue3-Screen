<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import MapIconActiveImg from '@/assets/images/map/map-icon-active.png';
  import MapIconImg from '@/assets/images/map/map-icon.png';

  const { startLoading, endLoading } = useLoadingStore();
  const { isCustomLoading } = storeToRefs(useLoadingStore());
  startLoading();
  const pageKey = 'homePage';
  const moduleKeys = {
    profile: 'profile',
    institution: 'institution',
  };
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
      icon: MapIconActiveImg,
    },
    {
      name: '测试点1',
      lat: 39.911593,
      lng: 116.396226,
      icon: MapIconImg,
    },
  ]);
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left v-if="!isCustomLoading && false" />
    <Right v-if="!isCustomLoading && false" />
    <Bottom v-if="!isCustomLoading && false" />
    <Map class="map" :markerList="markerList" />
    <!-- <Loading class="loading" /> -->
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
