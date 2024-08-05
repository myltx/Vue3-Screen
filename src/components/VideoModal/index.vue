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
      <slot></slot>
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
</style>
