import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', () => {
  // 定义状态
  const isCustomLoading = ref(true);

  // 定义方法
  const startLoading = () => {
    isCustomLoading.value = true;
  };

  const endLoading = () => {
    isCustomLoading.value = false;
  };

  return { isCustomLoading, startLoading, endLoading };
});
