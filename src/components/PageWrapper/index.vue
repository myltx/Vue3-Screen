<script setup lang="ts">
  import { useSettingStore } from '@/stores/index';
  const settingStore = useSettingStore();
  const { isScale } = storeToRefs(settingStore);
  const wrapperStyle = {};
  const props = defineProps({
    showHeader: {
      type: Boolean,
      default: true,
    },
    showSetting: {
      type: Boolean,
      default: false,
    },
  });
  const { showHeader, showSetting } = unref(props);
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
    <Header v-bind="$attrs" v-if="showHeader" :showSetting="showSetting" />
    <slot></slot>
  </ScaleScreen>
  <Setting />
</template>

<style scoped></style>
