<script setup lang="ts">
  import Codemirror from 'codemirror-editor-vue3';

  // placeholder
  import 'codemirror/addon/display/placeholder.js';

  //   // language
  import 'codemirror/mode/javascript/javascript.js';
  //   // placeholder
  import 'codemirror/addon/display/placeholder.js';
  //   // theme
  import 'codemirror/theme/dracula.css';
  const router = useRouter();

  const cmOptions = {
    mode: 'javascript', // Language mode
    theme: 'dracula', // Theme
  };

  const code = ref('');

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
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="请输入"
    :height="'80vh'"
  />
</template>

<style scoped></style>
