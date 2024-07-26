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
  .map {
    position: absolute;
    top: 0;
    left: 0;
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
