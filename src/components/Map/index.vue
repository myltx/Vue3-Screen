<script setup lang="ts">
  import { BMap, BMarker, BPolygon, useAreaBoundary, BLabel } from 'vue3-baidu-map-gl';
  import MapIconActiveImg from '@/assets/images/map/map-icon-active.png';
  import MapIconImg from '@/assets/images/map/map-icon.png';
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
    areaName: {
      type: String,
      default: '浙江省杭州市西湖区',
    },
    areaKey: {
      type: String,
      default: '浙江省杭州市',
    },
  });
  const emits = defineEmits(['markerClick']);
  const defaultCanterPoint = { lng: 120.103241, lat: 30.307823 };
  const centerPoint = ref(defaultCanterPoint);
  const map = ref<any>(null);
  const { isLoading, boundaries, get } = useAreaBoundary();

  function handleInitd() {
    get(props.areaName);
  }
  watch(
    () => isLoading.value,
    () => {
      setTimeout(() => {
        map.value.map.setHeading(64.5);
        map.value.map.setTilt(50);
      }, 200);
    },
  );
  watch(
    () => props.markerList,
    (newVal: any) => {
      if (newVal.length) {
        centerPoint.value = { lng: newVal[0]?.lng, lat: newVal[0]?.lat };
      } else {
        centerPoint.value = defaultCanterPoint;
      }
    },
    { immediate: true, deep: true },
  );

  function handleMarkerClick(data: any) {
    map.value.map.panTo({ lng: data?.lng, lat: data?.lat });
    props.markerList.forEach((item: any) => {
      if (item.name == data.name) {
        item.icon = MapIconActiveImg;
      } else {
        item.icon = MapIconImg;
      }
    });

    emits('markerClick', data);
  }
  function cleanMarkerActive() {
    props.markerList.forEach((item: any) => {
      item.icon = MapIconImg;
    });
    setTimeout(() => {
      map.value.map.setHeading(64.5);
      map.value.map.setTilt(50);
    }, 200);
  }
  function mapInitd(e: any) {
    map.value = e;
    handleInitd();
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
  defineExpose({
    cleanMarkerActive,
  });
</script>
<template>
  <BMap
    :heading="64.5"
    :tilt="50"
    :height="'100%'"
    class="map"
    enableDoubleClickZoom
    enableScrollWheelZoom
    ak="0BMG1CekNJ2VVFRrrmX6x6qma8WHYGY0"
    mapStyleId="6053418609ae26d7c32f05d45ea7991b"
    :center="centerPoint"
    @initd="mapInitd"
  >
    <BMarker
      v-for="(marker, index) in props.markerList"
      :key="index"
      :position="{ lng: marker.lng, lat: marker.lat }"
      :data="marker"
      :icon="getMarkerIcon(marker.icon)"
      @click="handleMarkerClick(marker)"
    />
    <BLabel
      v-for="(marker, index) in props.markerList"
      :key="index"
      :position="{ lng: marker.lng, lat: marker.lat }"
      :content="marker.name"
      :offset="{
        x: -30,
        y: -50,
      }"
      :style="{
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        borderRadius: '3px',
        padding: '5px 10px',
        fontSize: '14px',
      }"
    />
    <BPolygon
      :key="props.areaKey"
      isBoundary
      :path="boundaries"
      stroke-color="#00baaf"
      fillColor="rgba(0,0,0,0)"
      :stroke-weight="2"
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
