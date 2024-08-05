<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import detailModel from './components/detailModel.vue';
  import Main from './components/Main.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { moduleKeys } from './config';

  const route = useRoute();
  const { name, orgId, back } = route.query;

  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  startLoading();

  const open = ref(false);
  const { getALlModuleData } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  getALlModuleData(moduleKeys, endLoading, orgId);

  setTimeout(() => {
    open.value = true;
  }, 2000);
</script>
<template>
  <PageWrapper :title="name" :showBack="Number(back) == 1">
    <Left v-if="!isLoading" v-motion-slide-left />
    <Right v-if="!isLoading" v-motion-slide-right />
    <Bottom v-if="!isLoading" v-motion-slide-visible-bottom />
    <!-- <Map class="map" :markerList="markerList" /> -->
    <Main v-if="!isLoading" />
    <!-- <div class="bg-container">

     </div> -->
    <Loading class="loading" />
    <detailModel />
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
