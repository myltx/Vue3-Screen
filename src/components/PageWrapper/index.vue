<script setup lang="ts">
  import { useSettingStore } from '@/stores/index';
  import { storeToRefs } from 'pinia';
  const settingStore = useSettingStore();
  const { isScale } = storeToRefs(settingStore);
  const wrapperStyle = {};
</script>
<template>
  <ScaleScreen
    width="1920"
    height="1080"
    :delay="500"
    :fullScreen="false"
    :boxStyle="{
      background: '#03050C',
      overflow: isScale ? 'hidden' : 'auto',
    }"
    :wrapperStyle="wrapperStyle"
    :autoScale="isScale"
  >
    <Header v-bind="$attrs" />
    <slot></slot>
  </ScaleScreen>
  <Setting />
</template>

<style scoped></style>
