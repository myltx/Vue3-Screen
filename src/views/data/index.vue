<script setup lang="ts">
  const router = useRouter();
  const goBack = () => {
    router.go(-1);
  };
</script>
<template>
  <div>
    <a-button @click="goBack">返回</a-button>
  </div>
</template>

<style scoped></style>
