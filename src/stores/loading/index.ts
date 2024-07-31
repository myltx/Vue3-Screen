export const useLoadingStore = defineStore('loading', () => {
  // 定义状态
  const isLoading = ref(true);

  // 定义方法
  const startLoading = () => {
    isLoading.value = true;
  };

  const endLoading = () => {
    isLoading.value = false;
  };

  return { isLoading, startLoading, endLoading };
});
