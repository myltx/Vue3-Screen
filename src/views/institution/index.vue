<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import { Left, Right, Bottom, Main } from './components';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { moduleKeys } from './config';
  import { usePlayVideo } from '@/stores/videoPlay';
  import { ParentDataType } from 'types/components.common';

  const route = useRoute();
  const { name, orgId, back } = route.query;
  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  const { videoList, videoModalValue } = storeToRefs(usePlayVideo());
  const { playVideo, getList } = usePlayVideo();
  const open = ref(false);
  const { interValGeyAllModuleData } = useCockpitDataStore();
  const parentData: ParentDataType = {
    videoList: videoList.value,
    playVideo,
    showMore: () => {},
  };
  watch(
    () => videoList.value,
    () => {
      parentData.videoList = videoList.value;
    },
  );
  provide('data', parentData);

  startLoading();
  // 根据配置的 moduleKey 在页面动态获取数据
  interValGeyAllModuleData(moduleKeys, endLoading, orgId);
  getList();
  setTimeout(() => {
    open.value = true;
  }, 2000);
</script>
<template>
  <PageWrapper :title="name" :showBack="Number(back) == 1">
    <Left v-if="!isLoading" v-motion-slide-left />
    <Right v-if="!isLoading" v-motion-slide-right />
    <Bottom v-if="!isLoading" v-motion-slide-visible-bottom />
    <Main v-if="!isLoading" />
    <Loading class="loading" />
    <VideoModal v-model:modalValue="videoModalValue" />
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
