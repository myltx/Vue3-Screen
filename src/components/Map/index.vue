<script setup lang="ts">
  import { BMap, BMarker } from 'vue3-baidu-map-gl';
  const props = defineProps({
    markerList: {
      type: Array,
      default: () => [],
    },
  });
  const { markerList } = unref(props);
  const centerPoint = ref({ lng: 116.404, lat: 39.915 });

  watch(
    () => markerList,
    (newVal) => {
      if (newVal.length) {
        centerPoint.value = { lng: newVal[0]?.lng, lat: newVal[0]?.lat };
      } else {
        centerPoint.value = { lng: 116.404, lat: 39.915 };
      }
    },
    { immediate: true, deep: true },
  );

  function handleMarkerClick(data: any) {
    console.log(data);
    centerPoint.value = { lng: data?.lng, lat: data?.lat };
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
    :center="centerPoint"
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
