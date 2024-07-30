<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';

  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
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
      lat: number;
      lng: number;
      name: string;
      [key: string]: any;
    }[]
  >([
    {
      name: '测试点',
      lat: 39.915185,
      lng: 116.403901,
    },
    {
      name: '测试点1',
      lat: 39.911593,
      lng: 116.396226,
    },
  ]);
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left v-if="!isLoading && false" />
    <Right v-if="!isLoading && false" />
    <Bottom v-if="!isLoading && false" />
    <Map class="map" v-if="!isLoading" :markerList="markerList" />
    <Loading class="loading" />
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
