<script setup lang="ts">
  import { getDate } from '@/utils';

  const props = defineProps({
    title: {
      type: [String, Number],
      default: '',
    },
  });
  const { title } = toRaw(props);
  const time = ref(getDate('HH:mm:ss'));
  setInterval(() => {
    time.value = getDate('HH:mm:ss');
  }, 1000);
</script>
<template>
  <div class="header-container">
    <div class="title"> {{ title }} </div>
    <div class="other">
      <div class="date">{{ getDate() }}</div>
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './index.scss';
</style>
