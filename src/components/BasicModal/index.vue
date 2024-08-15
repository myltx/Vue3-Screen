<script setup lang="ts">
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
  const open = ref(props.modalValue);
  const modalRef = ref();
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
  onClickOutside(modalRef, () => {
    emits('update:modalValue', false);
  });
</script>
<template>
  <div
    v-motion-pop-visible
    ref="modalRef"
    v-if="open"
    class="w-50% h-50% bg-white z-999 position-absolute top-1/2 left-1/2 p-20px basic-modal"
  >
    <div class="title text-white">
      <div class="title-text">{{ props.title }}</div>
    </div>
    <div
      class="cursor-pointer position-absolute top-0 right--40px b-1px border-#2BAAFF p-10px close"
      @click="$emit('update:modalValue', false)"
    >
      <img class="w-18px" src="@/assets/images/basic/modal/close-icon.png" />
    </div>
    <div class="modal-content w-100% h-90% mt-20px overflow-y-auto">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
  .basic-modal {
    transform: translate(-50%, -50%) !important;
    width: 646px;
    height: 436px;
    background: linear-gradient(180deg, rgba(0, 0, 1, 0.7) 0%, #091829 100%);
    box-shadow: 0px 13px 26px 0px rgba(0, 0, 0, 0.89);
    border: 1px solid #2baaff;
    backdrop-filter: blur(4px);
    .title {
      position: relative;
      .title-text {
        width: 100%;
        height: 21px;
        font-family: PangMenZhengDao;
        font-size: 18px;
        color: #ffffff;
        line-height: 21px;
        letter-spacing: 1px;
        text-align: center;
        font-style: normal;
        background: linear-gradient(top, #ffffff, #caf9ff);
      }
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        display: inline-block;
        width: 106px;
        height: 7px;
        background: #2baaff;
        margin-right: 10px;
        background: url('@/assets/images/basic/modal/left-icon.png') no-repeat;
        background-size: 100% 100%;
      }
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        display: inline-block;
        width: 106px;
        height: 7px;
        background: #2baaff;
        background: url('@/assets/images/basic/modal/right-icon.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .close {
      width: 32px;
      height: 32px;
      background: linear-gradient(180deg, rgba(0, 0, 1, 0.5) 0%, #091829 100%);
      box-shadow: 0px 13px 26px 0px rgba(0, 0, 0, 0.89);
      border: 1px solid #2baaff;
      backdrop-filter: blur(4px);
    }
    .modal-content {
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        width: 0 !important;
      }
    }
  }
</style>
