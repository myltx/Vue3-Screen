<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      default: '暂无数据',
    },
  });
</script>

<template>
  <div class="text-center w-100% text-#999 text-20px"> {{ props.text }} </div>
</template>

<style scoped></style>
