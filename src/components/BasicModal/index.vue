<script setup lang="ts">
  const props = defineProps({
    modalValue: {
      type: Boolean,
      required: true,
    },
  });
  const open = ref(props.modalValue);
  // watch for changes in the modelValue prop
  watch(
    () => props.modalValue,
    (value) => {
      open.value = value;
    },
  );
</script>
<template>
  <div
    v-motion-pop-visible
    v-if="open"
    class="w-50% h-50% bg-white z-999 position-absolute top-1/2 left-1/2 basic-modal"
  >
    <div class=""> 123123</div>
  </div>
</template>

<style scoped>
  .basic-modal {
    transform: translate(-50%, -50%) !important;
    width: 646px;
    height: 436px;
    background: linear-gradient(180deg, rgba(0, 0, 1, 0.5) 0%, #091829 100%);
    box-shadow: 0px 13px 26px 0px rgba(0, 0, 0, 0.89);
    border: 1px solid #2baaff;
    backdrop-filter: blur(4px);
  }
</style>
