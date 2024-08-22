<script setup lang="ts">
  import { DoubleRightOutlined, PlayCircleOutlined } from '@ant-design/icons-vue';

  const parentData: any = inject('data') as ParentDataType;
  const { playVideo } = parentData;
  // 实现watch 监听 parentData.videoList 数据变化
  watchEffect(() => {
    const length = parentData.videoList?.length;
    if (length < 4 && length > 0) {
      for (let i = 0; i < 4 - length; i++) {
        parentData.videoList.push({
          type: 'empty',
        });
      }
    }
  });
</script>
<template>
  <BasicBox :title="'实时视频联动'">
    <template #subTitle>
      <span
        class="more-tip"
        v-if="parentData.videoList?.length"
        @click="playVideo(parentData.videoList[0], false)"
      >
        更多 <DoubleRightOutlined />
      </span>
    </template>
    <div class="video-container">
      <template v-if="parentData.videoList?.length">
        <div
          v-for="(video, index) in parentData.videoList.slice(0, 4)"
          :key="video"
          :class="['position-relative w-50% h-50%', index < 2 ? 'mb-10px' : '']"
        >
          <div v-if="video.type != 'empty'" @click="playVideo(video)">
            <img
              :src="video.snapPicUrl"
              alt=""
              class="mt-0px h-100% w-98%"
              v-if="video.snapPicUrl"
            />
            <img
              src="@/assets/images/institution/video.png"
              alt=""
              class="mt-0px h-100% w-98%"
              v-else
            />
            <play-circle-outlined
              style="font-size: 50px; color: rgba(255, 255, 255, 0.6)"
              class="position-absolute top-1/2 left-1/2 icon cursor-pointer"
            />
          </div>
          <div class="bg-#062643 w-98% h-100% text-center" v-else>
            <div class="flex items-center justify-center h-100% text-#999">暂无监控</div>
          </div>
        </div>
      </template>
      <Empty v-else :text="'暂无监控'" />
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
