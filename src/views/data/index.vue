<script setup lang="ts">
  import { supabase } from '@/utils/supabase';

  const router = useRouter();
  const code = ref<any>({
    pageName: '首页',
    pageKey: '',
    moduleKey: '',
    moduleName: '',
    moduleParam: '',
    moduleType: '',
    kvList: [],
  });

  async function getTodos() {
    const { data } = await supabase.from('data').select();
    code.value = data;
  }

  onMounted(() => {
    getTodos();
  });
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

  <CodeEditor :code="code" theme="vs-dark" height="500" />
</template>

<style scoped></style>
