<script setup lang="ts"></script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <div class="container-left">
      <BasicBox :title="'消防安全制度建设'"> 1 </BasicBox>
      <BasicBox :title="'消防安全制度建设'" />
      <BasicBox :title="'消防安全制度建设'" />
      <BasicBox :title="'消防安全制度建设'" />
    </div>
  </PageWrapper>
</template>

<style scoped lang="scss">
  .container-left {
    width: 391px;
    height: 255px;
    background: linear-gradient(180deg, rgba(0, 0, 1, 0.5) 0%, #091829 100%);
    backdrop-filter: blur(4px);
  }
</style>
