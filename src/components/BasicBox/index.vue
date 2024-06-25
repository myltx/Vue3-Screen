<script setup lang="ts">
  import type { BasicBoxProps } from '@/types/components';
  import { BasicConfig } from './src/default';
  const { title: defaultTitle, titleBgImg: defaultTitleBg, height: defaultHeight } = BasicConfig;

  const props = defineProps<BasicBoxProps>();
  const { title, titleBgImg } = toRaw(props);
</script>
<template>
  <div class="basic-box">
    <div
      class="box-title"
      :style="{
        background: `url(${titleBgImg || defaultTitleBg}) no-repeat`,
        backgroundSize: '100% 100%',
      }"
    >
      <div class="title">{{ title || defaultTitle }}</div>
    </div>
    <div
      class="box-content"
      :style="{
        height: `${height || defaultHeight}`,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './src/index.scss';
  .basic-box {
    width: 100%;
    height: auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .box-title {
      width: 100%;
      height: 52px;
      // background: url('@/assets/images/basic/box/basic-title-bg.png') no-repeat;
      // background-size: 100% 100%;
      display: flex;
      align-items: center;

      .title {
        font-family: PangMenZhengDao;
        font-size: 20px;
        color: #ffffff;
        letter-spacing: 1px;
        text-align: left;
        font-style: normal;
        background: linear-gradient(top, #ffffff, #caf9ff);
        margin-bottom: 20px;
        padding: 20px;
      }
    }
    .box-content {
      color: #fff;
      padding: 10px 20px;
    }
  }
</style>
