<script setup lang="ts">
  import { onMounted } from 'vue';
  import * as THREE from 'three';
  import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

  const scene = new THREE.Scene();
  onMounted(() => {
    // 在组件挂载后加载3D模型
    loadModel();
  });

  function loadModel() {
    const loader = new FBXLoader();

    loader.load('src/views/3DModelPage/src/model/1/1.fbx', (object) => {
      console.log(object, ' 213');
      // 在加载完成后的回调函数中处理模型对象
      // 例如添加到场景中
      scene.add(object);
    });
  }
</script>
<template>
  <div class="model-container">
    <!-- 在这里承载3D模型 -->
  </div>
</template>

<style scoped lang="scss">
  .model-container {
    width: 100%;
    height: 300px;
  }
</style>
