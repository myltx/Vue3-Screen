<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="请输入"
    :height="'80vh'"
  />
</template>

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

  const props = defineProps({
    code: {
      type: String,
      default: '',
    },
  });
  console.log(props.code, 'props');
  const { code } = toRaw(props);
  const cmOptions = {
    mode: 'javascript', // Language mode
    theme: 'dracula', // Theme
  };

  watch(
    () => props.code,
    () => {
      console.log(props.code);
    },
  );
</script>
