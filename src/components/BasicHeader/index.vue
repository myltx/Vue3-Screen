<script setup lang="ts">
  import { SettingOutlined } from '@ant-design/icons-vue';
  import { getDate } from '@/utils';
  import { useSettingStore } from '@/stores';

  const router = useRouter();
  const { setSettingShow } = useSettingStore();

  const props = defineProps({
    title: {
      type: [String, Number],
      default: '',
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
  const { title, showBack } = toRaw(props);
  const time = ref(getDate('HH:mm:ss'));
  setInterval(() => {
    time.value = getDate('HH:mm:ss');
  }, 1000);
  function goBack() {
    router.go(-1);
  }
</script>
<template>
  <div class="header-container">
    <div class="title"> {{ title }} </div>
    <a-space class="other">
      <div
        class="text-white b-1px b-#0a2b57 p-5px cursor-pointer rounded-5px font-bold"
        v-if="showBack"
        @click="goBack"
      >
        返回
      </div>
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
        v-if="showSetting"
      />
    </a-space>
  </div>
  <div class="footer-container"></div>
</template>

<style scoped lang="scss">
  @import './index.scss';
</style>
