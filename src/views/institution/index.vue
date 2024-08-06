<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import Main from './components/Main.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { moduleKeys } from './config';
  import { usePlayVideo } from '@/stores/videoPlay';
  import { ParentDataType } from 'types/components.common';

  const route = useRoute();
  const { name, orgId, back } = route.query;

  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  startLoading();

  const { videoList, videoModalValue } = storeToRefs(usePlayVideo());
  const { playVideo } = usePlayVideo();

  const open = ref(false);
  const { getALlModuleData } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  getALlModuleData(moduleKeys, endLoading, orgId);

  const parentData: ParentDataType = {
    videoList: videoList.value,
    playVideo,
  };
  provide('data', parentData);

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
