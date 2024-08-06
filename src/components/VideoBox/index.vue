<script setup lang="ts">
  import { DoubleRightOutlined, PlayCircleOutlined } from '@ant-design/icons-vue';
  import { ParentDataType } from 'types/components.common';

  const parentData: any = inject('data') as ParentDataType;
  const { videoList, playVideo } = parentData;
</script>
<template>
  <BasicBox :title="'实时视频联动'">
    <template #subTitle>
      <span class="more-tip" @click="playVideo({}, true)">更多 <DoubleRightOutlined /> </span>
    </template>
    <div class="video-container">
      <div
        class="position-relative"
        v-for="video in videoList.slice(0, 4)"
        :key="video"
        @click="playVideo(video)"
      >
        <img src="@/assets/images/institution/video.png" alt="" class="mt-0px" />
        <play-circle-outlined
          style="font-size: 50px; color: rgba(255, 255, 255, 0.6)"
          class="position-absolute top-1/2 left-1/2 icon cursor-pointer"
        />
      </div>
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
    .icon {
      transform: translate(-50%, -50%);
    }
  }
</style>
