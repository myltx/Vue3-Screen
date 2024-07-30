<script setup lang="ts">
  import { BMap, BMarker } from 'vue3-baidu-map-gl';
</script>
<template>
  <BMap
    :heading="64.5"
    :tilt="50"
    :height="'100%'"
    class="map"
    ak="0BMG1CekNJ2VVFRrrmX6x6qma8WHYGY0"
    mapStyleId="6053418609ae26d7c32f05d45ea7991b"
  >
    <BMarker :zIndex="99" :position="{ lat: 39.915185, lng: 116.403901 }" icon="start" />
  </BMap>
</template>

<style scoped lang="scss">
  .map {
    width: 100%;
    height: 100% !important;
  }
</style>
<style lang="scss">
  .anchorBL {
    display: none !important;
  }
</style>
