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
  const { getALlModuleData } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  startLoading();
  getALlModuleData(moduleKeys, endLoading);
  const markerList = ref<{ [key: string]: any }[]>([
    {
      name: '测试点',
      lat: 30.307823,
      lng: 120.103241,
      icon: MapIconImg,
    },
    {
      name: '测试点1',
      lat: 30.311893,
      lng: 120.107183,
      icon: MapIconImg,
    },
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'key',
      key: 'key',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  function markerClick(markerData: any) {
    console.log(markerData);
    openMapModal.value = true;
  }
  function handleDetail() {
    router.push({
      path: '/institution',
      // query: {
      //   name: markerData.name,
      // },
    });
  }
  function cleanMarkerActive() {
    mapRef.value?.cleanMarkerActive();
  }

  function playVideo(videoData: any) {
    console.log(videoData);
    videoModalValue.value = true;
  }
  function showOrgMore(type: number) {
    modalTitle.value = modalType[type]?.title;
    console.log(modalTitle.value);
    open.value = true;
  }

  setTimeout(() => {
    // videoModalValue.value = true;
  }, 2000);
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left v-if="!isLoading" @play="playVideo" @more="showOrgMore" v-motion-slide-left />
    <Right v-if="!isLoading" v-motion-slide-right />
    <Bottom v-if="!isLoading" v-motion-slide-visible-bottom />
    <Main v-if="!isLoading" />
    <Map class="map" ref="mapRef" :markerList="markerList" @markerClick="markerClick" />
    <Loading class="loading" />
    <BasicModal v-model:modalValue="open" :title="modalTitle">
      <a-table :columns="columns" :data-source="data" :pagination="false" />
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
