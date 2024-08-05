<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import Main from './components/Main.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import MapIconImg from '@/assets/images/map/map-icon.png';
  import { modalType, moduleKeys } from './config';

  const router = useRouter();
  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  const mapRef = ref();
  const modalTitle = ref('');
  const open = ref(false);
  const openMapModal = ref(false);
  const videoModalValue = ref(false);
  const { getALlModuleData, getRule, getValue } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  startLoading();
  getALlModuleData(moduleKeys, endLoading);
  const markerList = ref<{ [key: string]: any }[]>([]);

  const columns = ref<any>([]);

  const tabData = ref([]);

  function markerClick(markerData: any) {
    console.log(markerData);

    openMapModal.value = true;
  }
  function handleDetail() {
    router.push({
      path: '/institution',
      query: {
        // name: markerData.name,
        back: 1,
      },
    });
  }
  watch(
    () => isLoading.value,
    (val) => {
      if (!val) {
        markerList.value = [];
        const orgList = getValue('map', 0);
        orgList.forEach((item: any) => {
          const lngLat = item.orgLngLat ? item.orgLngLat.split(',') : [];
          if (lngLat && lngLat.length) {
            item.lng = Number(lngLat[0]);
            item.lat = Number(lngLat[1]);
          }
          item.icon = MapIconImg;
        });
        markerList.value = orgList;
        // mapRef.value?.initMap();
      }
    },
  );
  function cleanMarkerActive() {
    mapRef.value?.cleanMarkerActive();
  }

  function playVideo(videoData: any) {
    console.log(videoData);
    videoModalValue.value = true;
  }
  function showMore(type: number) {
    const { key, title, index, columns: col } = modalType[type];
    const rules = getRule(key, index || 0);
    console.log(rules, 'r');
    columns.value = col;
    tabData.value = getValue(key, index || 0);
    modalTitle.value = title;
    open.value = true;
  }
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left v-if="!isLoading" @play="playVideo" @more="showMore" v-motion-slide-left />
    <Right v-if="!isLoading" @more="showMore" v-motion-slide-right />
    <Bottom v-if="!isLoading" @more="showMore" v-motion-slide-visible-bottom />
    <Main v-if="!isLoading" />
    <Map
      class="map"
      ref="mapRef"
      v-if="!isLoading"
      :markerList="markerList"
      @markerClick="markerClick"
    />
    <Loading class="loading" />
    <BasicModal v-model:modalValue="open" :title="modalTitle">
      <a-table
        :columns="columns"
        :data-source="tabData"
        :pagination="false"
        :scroll="{ y: 300, x: 500 }"
      />
    </BasicModal>
    <BasicMapModal
      v-model:modalValue="openMapModal"
      :title="'泰康明养老院'"
      @closed="cleanMarkerActive"
    >
      <div @click="handleDetail" class="text-white bg-red p-20px h-20px cursor-pointer">213</div>
    </BasicMapModal>
    <VideoModal v-model:modalValue="videoModalValue" />
  </PageWrapper>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
  .map {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
