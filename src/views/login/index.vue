<script setup lang="ts">
  import { getUserCurrentInfo } from '@/api/cockpit/user';

  // 这里走免登接口
  getUserCurrentInfo({}).then((res) => {
    console.log(res);
  });
</script>
<template>
  <PageWrapper :show-header="false">
    <Loading class="loading" />
  </PageWrapper>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
</style>
