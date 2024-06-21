<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="test placeholder"
    :height="200"
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

  const cmOptions = {
    mode: 'text/javascript', // Language mode
    theme: 'dracula', // Theme
  };

  const code = ref(`
      var i = 0;
      for (; i < 9; i++) {
	console.log(i);
	// more statements
      }`);
</script>
