<script setup lang="ts">
  import { BMap, BMarker } from 'vue3-baidu-map-gl';
  interface Marker {
    lng: number;
    lat: number;
    icon?: any;
  }
  const props = defineProps({
    markerList: {
      type: Array<Marker>,
      default: () => [],
    },
  });
  const { markerList } = unref(props);
  const centerPoint = ref({ lng: 116.404, lat: 39.915 });
  const map = ref<any>(null);

  watch(
    () => markerList,
    (newVal: any) => {
      if (newVal.length) {
        centerPoint.value = { lng: newVal[0]?.lng, lat: newVal[0]?.lat };
      } else {
        centerPoint.value = { lng: 116.404, lat: 39.915 };
      }
    },
    { immediate: true, deep: true },
  );

  function handleMarkerClick(data: any) {
    map.value.map.panTo({ lng: data?.lng, lat: data?.lat });
    setTimeout(() => {
      map.value.map.setHeading(64.5);
      map.value.map.setTilt(50);
    }, 200);
  }
  function mapInitd(e: any) {
    map.value = e;
  }
  function getMarkerIcon(icon: string) {
    if (icon.includes('/src/assets/')) {
      const imgIcon = {
        imageUrl: icon,
        // imageSize: {
        //   width: 30,
        //   height: 30,
        // },
        size: {
          width: 40,
          height: 40,
        },
        // anchor: {
        //   width: 15,
        //   height: 15,
        // },
      };
      return imgIcon;
    } else {
      return icon;
    }
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
    @initd="mapInitd"
  >
    <BMarker
      v-for="(marker, index) in markerList"
      :key="index"
      :position="{ lng: marker.lng, lat: marker.lat }"
      :icon="getMarkerIcon(marker.icon)"
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
