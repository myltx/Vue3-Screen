<script setup lang="ts">
  const router = useRouter();
  const goBack = () => {
    router.go(-1);
  };
</script>
<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="数据配置"
    sub-title="在这里配置大屏展示需要的数据内容"
    @back="goBack"
  />
</template>

<style scoped></style>
