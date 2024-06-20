<script setup lang="ts">
  import { SettingOutlined } from '@ant-design/icons-vue';
  import { getDate } from '@/utils';
  import { useSettingStore } from '@/stores';
  const { setSettingShow } = useSettingStore();

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
    <a-space class="other">
      <div class="date">{{ getDate() }}</div>
      <div class="time">{{ time }}</div>
      <a-avatar size="large">
        <img src="@/assets/images/header/avatar.gif" alt="" class="avatar" />
      </a-avatar>
      <SettingOutlined
        :style="{
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          marginBottom: '5px',
        }"
        @click="setSettingShow(true)"
      />
    </a-space>
  </div>
</template>

<style scoped lang="scss">
  @import './index.scss';
</style>
