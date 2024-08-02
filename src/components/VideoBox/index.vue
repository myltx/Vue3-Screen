<script setup lang="ts">
  import { DoubleRightOutlined } from '@ant-design/icons-vue';

  const emits = defineEmits(['more']);

  const handleMore = () => {
    emits('more');
  };
</script>
<template>
  <BasicBox :title="'实时视频联动'">
    <template #subTitle>
      <span class="more-tip" @click="handleMore">更多 <DoubleRightOutlined /> </span>
    </template>
    <div class="video-container">
      <img src="@/assets/images/institution/video.png" alt="" class="mt-0px" />
      <img src="@/assets/images/institution/video.png" alt="" class="mt-0px" />
      <img src="@/assets/images/institution/video.png" alt="" class="mt-8px" />
      <img src="@/assets/images/institution/video.png" alt="" class="mt-8px" />
    </div>
  </BasicBox>
</template>

<style scoped lang="scss">
  .more-tip {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    text-align: right;
    font-style: normal;
    margin-right: 55px;
    text-transform: none;
    cursor: pointer;
  }
  .video-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -20px;
    margin-right: -20px;
    height: 100%;
    img {
      cursor: pointer;
      // margin-top: 8px;
    }
  }
</style>
