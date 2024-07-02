<script setup lang="ts">
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left />
    <Right />
    <Bottom />
    <Map class="map" />
  </PageWrapper>
</template>

<style scoped lang="scss">
  .map {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
