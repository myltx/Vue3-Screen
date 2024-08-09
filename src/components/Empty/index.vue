<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      default: '暂无数据',
    },
  });
</script>

<template>
  <div class="flex justify-center flex-wrap w-100%">
    <img src="@/assets/images/basic/empty.png" alt="" class="h-80px w-120px" />
    <div class="text-center w-100% text-#999 text-20px mt--70px">{{ props.text }}</div>
  </div>
</template>

<style scoped></style>
