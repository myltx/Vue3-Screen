<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import { storeToRefs } from 'pinia';
  import Index from './components/index.vue';

  const { isLoading } = storeToRefs(useLoadingStore());
</script>
<template>
  <div v-if="isLoading">
    <Index />
  </div>
</template>

<style scoped></style>
