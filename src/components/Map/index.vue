<script setup lang="ts">
  import { BMap, BMarker, BPolygon, useAreaBoundary, BLabel } from 'vue3-baidu-map-gl';
  import MapIconActiveImg from '@/assets/images/map/map-icon-active.png';
  import MapIconImg from '@/assets/images/map/map-icon.png';

  const props = defineProps({
    markerList: {
      type: Array<{ [key: string]: any }>,
      default: () => [],
    },
    areaName: {
      type: String,
      default: '浙江省海宁市',
    },
    areaKey: {
      type: String,
      default: '浙江省海宁市',
    },
  });
  const emits = defineEmits(['markerClick']);
  const defaultCanterPoint = { lng: 120.6803241, lat: 30.367823 };
  const centerPoint = ref(defaultCanterPoint);
  const map = ref<any>(null);
  const { isLoading, boundaries, get } = useAreaBoundary();
  const showSearchSelect = ref(false);
  const selectValue = ref();
  const searchMarkerRef = ref();

  function handleInitd() {
    get(props.areaName);
    setTimeout(() => {
      map.value.map.setCenter(defaultCanterPoint, {
        tilt: 55,
        heading: 39.5,
      });
      // centerPoint.value = defaultCanterPoint;
    }, 1000);
  }
  watch(
    () => isLoading.value,
    () => {
      setTimeout(() => {
        map.value.map.setHeading(39.5);
        map.value.map.setTilt(55);
      }, 200);
    },
  );
  // watch(
  //   () => props.markerList,
  //   (newVal: any) => {
  //     if (newVal && newVal.length) {
  //       centerPoint.value = { lng: newVal[0]?.lng, lat: newVal[0]?.lat };
  //     } else {
  //       centerPoint.value = defaultCanterPoint;
  //     }
  //   },
  //   { immediate: true, deep: true },
  // );

  function handleMarkerClick(data: any) {
    map.value.map.panTo({ lng: data?.lng, lat: data?.lat });
    props.markerList.forEach((item: any) => {
      if (item.orgId == data.orgId) {
        item.icon = MapIconActiveImg;
      } else {
        item.icon = MapIconImg;
      }
    });

    emits('markerClick', data);
  }

  const mouseoverMarker = (data: any) => {
    props.markerList.forEach((item: any) => {
      if (item.orgId == data.orgId) {
        item.isShowLabel = true;
      }
    });
  };
  const mouseoutMarker = () => {
    props.markerList.forEach((item: any) => {
      item.isShowLabel = false;
    });
  };

  function cleanMarkerActive() {
    props.markerList.forEach((item: any) => {
      item.icon = MapIconImg;
    });
    setTimeout(() => {
      map.value.map.setHeading(39.5);
      map.value.map.setTilt(55);
    }, 200);
  }
  function mapInitd(e: any) {
    map.value = e;
    handleInitd();
  }
  function getMarkerIcon(icon: string) {
    if (icon.includes('.png')) {
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

  const handleChange = (value: string, options: any) => {
    handleMarkerClick(options);
    changeSearchStatus();
    selectValue.value = null;
  };

  const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  function changeSearchStatus() {
    showSearchSelect.value = !showSearchSelect.value;
  }
  onClickOutside(searchMarkerRef, () => {
    setTimeout(() => {
      showSearchSelect.value = false;
    }, 100);
  });

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
    :zoom="12"
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
      @mouseover="mouseoverMarker(marker)"
      @mouseout="mouseoutMarker"
      @click="handleMarkerClick(marker)"
    />
    <BLabel
      v-for="(marker, index) in props.markerList"
      :key="index"
      :position="{ lng: marker.lng, lat: marker.lat }"
      :content="marker.name"
      :offset="{
        x: -50,
        y: -50,
      }"
      :style="{
        color: !marker.isShowLabel ? 'rgba(0,0,0,0)' : '#fff',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        borderRadius: '3px',
        padding: '5px 10px',
        fontSize: '14px',
        textAlign: 'center',
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

  <div class="search-marker" ref="searchMarkerRef">
    <img
      src="@/assets/images/map/marker-search.png"
      alt=""
      v-if="!showSearchSelect"
      v-motion-slide-left
      @click="changeSearchStatus"
    />
    <a-select
      v-if="showSearchSelect"
      v-motion-slide-left
      v-model:value="selectValue"
      show-search
      :field-names="{ label: 'name', value: 'orgId', options: 'children' }"
      placeholder="请选择机构"
      style="width: 150px"
      :options="props.markerList"
      :filter-option="filterOption"
      @change="handleChange"
    />
  </div>
</template>

<style scoped lang="scss">
  .map {
    width: 100%;
    height: 100% !important;
  }
  .search-marker {
    position: absolute;
    top: 7.5%;
    left: 22%;
    z-index: 9999;
    cursor: pointer;
    img {
      width: 32px;
      height: 32px;
    }
  }
</style>
<style lang="scss">
  .anchorBL {
    display: none !important;
  }
  .ant-select-selector {
    background: #152743 !important;
    border-color: #3d9cd1 !important;
  }
  .ant-select-selection-item {
    color: rgba(255, 255, 255, 0.49) !important;
  }
  .ant-select-dropdown {
    background: #152743 !important;
    // border-color: #3d9cd1 !important;
  }
  .ant-select-item-option-content {
    color: rgba(255, 255, 255, 0.49) !important;
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background: #2681bc !important;
    .ant-select-item-option-content {
      // color: #000 !important;
    }
  }

  .ant-select-selection-placeholder {
    color: rgba(255, 255, 255, 0.49) !important;
  }
  .ant-select-arrow {
    color: rgba(255, 255, 255, 0.49) !important;
  }
</style>
