<script setup lang="ts">
  import { usePlayVideo } from '@/stores/videoPlay';

  const props = defineProps({
    modalValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '提示',
    },
  });
  const emits = defineEmits(['closed', 'update:modalValue']);

  const { videoList, activeVideo, bloading, protocol, videoUrl } = storeToRefs(usePlayVideo());
  const { playVideo, stopActiveVideo } = usePlayVideo();
  const open = ref(props.modalValue);
  const videoModalRef = ref(null);
  // watch for changes in the modelValue prop
  watch(
    () => props.modalValue,
    (value) => {
      open.value = value;
      if (!value) {
        stopActiveVideo();
        emits('closed');
      }
    },
  );
  watch(
    () => videoUrl.value,
    () => {
      console.log(videoUrl.value, 'videoUrl');
    },
  );
  onClickOutside(videoModalRef, () => {
    emits('update:modalValue', false);
  });
</script>
<template>
  <div
    ref="videoModalRef"
    v-motion-pop-visible
    v-if="open"
    class="z-9999 position-absolute top-40% left-1/2 p-20px basic-modal"
  >
    <div
      class="cursor-pointer position-absolute top--40px right-0 b-1px border-#2BAAFF p-10px close"
      @click="$emit('update:modalValue', false)"
    >
      <img class="w-18px" src="@/assets/images/basic/modal/close-icon.png" />
    </div>
    <div class="modal-content w-100% h-100%">
      <div class="flex h-100%">
        <div class="left w-25% mr-1% h-100% overflow-y-auto">
          <div
            v-for="item in videoList.filter((item: any) => item?.type != 'empty')"
            :key="item.id"
            @click="playVideo(item)"
            :class="[
              'video-item p-3px bg-#1D334C mb-8px cursor-pointer border-1 border-solid border-#1D334C',
              activeVideo == item.id ? 'active' : '',
            ]"
          >
            <img :src="item.snapPicUrl" class="h-100% w-98%" alt="" v-if="item.snapPicUrl" />
            <img src="@/assets/images/institution/video.png" class="h-100% w-98%" alt="" v-else />
            <div class="text-white mt-4px text-14px font-500 w-100% text-ellipsis">
              {{ item.iotName }}
            </div>
            <div class="address text-ellipsis">{{ item.placeName }}</div>
          </div>
        </div>
        <div class="right w-74% bg-#000 h-100%">
          <live-player
            class="h-100%"
            v-if="videoUrl"
            muted
            fluent
            :loading="bloading"
            autoplay
            live
            :protocol="protocol"
            :video-url="videoUrl"
          />
          <div class="text-#999 font-bold text-20px mt-50px text-center" v-else>暂无播放源</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
  .basic-modal {
    transform: translate(-50%, -50%) !important;
    width: 55%;
    height: 61%;
    background: linear-gradient(180deg, rgba(0, 0, 1, 0.5) 0%, #091829 100%);
    box-shadow: 0px 13px 26px 0px rgba(0, 0, 0, 0.89);
    border: 1px solid #2baaff;
    backdrop-filter: blur(4px);
    .close {
      width: 32px;
      height: 32px;
      background: linear-gradient(180deg, rgba(0, 0, 1, 0.5) 0%, #091829 100%);
      box-shadow: 0px 13px 26px 0px rgba(0, 0, 0, 0.89);
      border: 1px solid #2baaff;
      backdrop-filter: blur(4px);
    }
  }

  // 视频
  .video-item {
    &.active {
      border: 2px solid #2eb0ff;
    }
    .address {
      width: 100%;
      color: rgba(255, 255, 255, 0.45);
      margin-top: 3px;
      font-size: 12px;
    }
  }
</style>
<style lang="scss">
  .player-wrapper {
    height: 100% !important;
  }
  .video-wrapper {
    height: 100% !important;
  }
</style>
