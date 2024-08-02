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
    showBack: {
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
    <BasicHeader
      v-bind="$attrs"
      v-if="showHeader"
      :showSetting="showSetting"
      :showBack="showBack"
    />
    <slot></slot>
  </ScaleScreen>
  <Setting />
</template>

<style scoped></style>
