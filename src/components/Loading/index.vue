<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import { storeToRefs } from 'pinia';
  import Index from './components/index.vue';

  const { isCustomLoading } = storeToRefs(useLoadingStore());
</script>
<template>
  <div v-if="isCustomLoading">
    <Index />
  </div>
</template>

<style scoped></style>
