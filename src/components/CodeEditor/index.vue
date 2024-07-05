<template>
  <MonacoEditor
    theme="vs"
    :options="editorOptions"
    language="json"
    :width="800"
    :height="600"
    @mounted="onEditorMounted"
    v-model:value="code"
  />
</template>

<script setup lang="ts">
  import MonacoEditor from 'monaco-editor-vue3';
  import * as monaco from 'monaco-editor';
  const props = defineProps({
    code: {
      type: String,
      default: '',
    },
  });
  // 代码内容
  const code = ref('// 在这里编写你的代码\n const noop = () => {}');

  // 编辑器选项
  const editorOptions = ref({
    theme: 'vs-dark',
    automaticLayout: true,
    formatOnPaste: true,
    formatOnType: true,
  });
  let editorInstance: monaco.editor.IStandaloneCodeEditor | null = null;

  const onEditorMounted = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorInstance = editor;
    // 初次挂载时自动格式化
    formatCode();
  };
  const formatCode = () => {
    if (editorInstance) {
      const model = editorInstance.getModel();
      console.log(model);
      if (model) {
        monaco.editor.action.formatDocument.run({ model, textEditor: editorInstance });
      }
    }
  };

  watch(
    () => props.code,
    (newVal) => {
      code.value = JSON.stringify(newVal);
      // 监听 props.code 变化时自动格式化
      formatCode();
    },
    { immediate: true },
  );
</script>
<style lang="scss" scoped>
  .editor {
    width: 600px;
    height: 800px;
  }
</style>
