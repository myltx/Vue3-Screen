<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  const { startLoading, endLoading } = useLoadingStore();
  startLoading();
  onMounted(() => {
    setTimeout(() => {
      endLoading();
    }, 3000);
  });
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left />
    <Right />
    <Bottom />
    <Map class="map" />
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
