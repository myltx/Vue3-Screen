<script setup lang="ts">
  import { BMap, BMarker } from 'vue3-baidu-map-gl';
  const props = defineProps({
    markerList: {
      type: Array,
      default: () => [],
    },
  });
  const { markerList } = unref(props);
  function handleMarkerClick(e: any) {
    console.log(e);
  }
</script>
<template>
  <BMap
    :heading="64.5"
    :tilt="50"
    :height="'100%'"
    class="map"
    enableDoubleClickZoom
    ak="0BMG1CekNJ2VVFRrrmX6x6qma8WHYGY0"
    mapStyleId="6053418609ae26d7c32f05d45ea7991b"
  >
    <BMarker
      v-for="(marker, index) in markerList"
      :key="index"
      :zIndex="99"
      :position="{ lat: marker?.lat, lng: marker?.lng }"
      icon="start"
      @click="handleMarkerClick(marker)"
    />
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
