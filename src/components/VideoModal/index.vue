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

  const { videoList, activeVideo } = storeToRefs(usePlayVideo());
  const { playVideoItem } = usePlayVideo();
  const open = ref(props.modalValue);
  // watch for changes in the modelValue prop
  watch(
    () => props.modalValue,
    (value) => {
      open.value = value;
      if (!value) {
        emits('closed');
      }
    },
  );
</script>
<template>
  <div
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
            v-for="(item, index) in videoList"
            :key="item.id"
            @click="playVideoItem(item)"
            :class="[
              'video-item p-3px bg-#1D334C mb-8px cursor-pointer border-1 border-solid border-#1D334C',
              activeVideo == index ? 'active' : '',
            ]"
          >
            <img
              src="@/assets/images/institution/4a13061a82e91b56e8f116ba94122d93备份 2@2x.png"
              alt=""
            />
            <div class="text-white mt-4px text-14px font-500 w-100% text-ellipsis">
              {{ item.name }}
            </div>
            <div class="address text-ellipsis">{{ item.address }}</div>
          </div>
        </div>
        <div class="right w-74% bg-red h-100%"></div>
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
