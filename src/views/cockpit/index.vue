<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Left from './components/Left.vue';
  import Right from './components/Right.vue';
  import Bottom from './components/Bottom.vue';
  import Main from './components/Main.vue';
  import Module from './components/module.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import MapIconImg from '@/assets/images/map/map-icon.png';
  import { modalType, moduleKeys } from './config';
  import { ParentDataType } from 'types/components.common';

  const router = useRouter();
  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  const mapRef = ref();
  const modalTitle = ref('');
  const open = ref(false);
  const openMapModal = ref(false);
  const videoModalValue = ref(false);
  const activeVideo = ref(0);
  const videoList = ref([
    {
      name: '视频1',
      address: '杭州',
      id: 1,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
    {
      name: '视频2',
      address: '杭州',
      id: 2,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
    {
      name: '视频3',
      address: '杭州',
      id: 3,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
    {
      name: '视频4',
      address: '杭州',
      id: 4,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
  ]);

  const orgData = ref<any>({
    orgType: 2,
    address: '杭州',
    phone: '131****1111',
    name: '张张养老院',
    id: 1,
    orgLngLat: '120.103241,30.307823',
    userName: '李四',
    orgId: '558933565715270917',
    phoneEncrypted: 'rRU88Ro/ioq051MnlJcPBw==',
    lng: 120.103241,
    lat: 30.307823,
    icon: '/src/assets/images/map/map-icon-active.png',
  });
  const { getALlModuleData, getRule, getValue } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  startLoading();
  getALlModuleData(moduleKeys, endLoading);
  const markerList = ref<{ [key: string]: any }[]>([]);

  const columns = ref<any>([]);

  const tabData = ref([]);

  function markerClick(markerData: any) {
    console.log(markerData);
    orgData.value = markerData;
    openMapModal.value = true;
  }
  function handleDetail() {
    router.push({
      path: '/institution',
      query: {
        orgId: orgData.value.orgId,
        name: orgData.value.name,
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
    orgData.value = {};
    mapRef.value?.cleanMarkerActive();
  }

  function playVideo(videoData: any, isMore?: boolean) {
    console.log(videoData);
    videoModalValue.value = true;
    if (!isMore) {
      activeVideo.value = videoData.id;
    }
  }
  function playVideoItem(videoData: any) {
    activeVideo.value = videoData.id;
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
  const parentData: ParentDataType = {
    videoList: videoList.value,
    playVideo,
    showMore,
  };
  provide('data', parentData);
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <Left
      v-if="!isLoading"
      @play="playVideo"
      @more="showMore"
      :videoList="videoList.slice(0, 4)"
      v-motion-slide-left
    />
    <Right v-if="!isLoading" @more="showMore" v-motion-slide-right />
    <Bottom v-if="!isLoading" @more="showMore" v-motion-slide-visible-bottom />
    <Main v-if="!isLoading" />
    <Map
      class="map"
      ref="mapRef"
      v-if="!isLoading"
      :markerList="markerList"
      @marker-click="markerClick"
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
      :title="orgData.name"
      @closed="cleanMarkerActive"
    >
      <div class="info flex justify-between items-start">
        <div>
          <div class="info-item flex items-center">
            地址：<div>{{ orgData.address }}</div>
          </div>
          <div class="info-item flex items-center my-4px">
            机构安全负责人：<div>{{ orgData.userName }}</div>
          </div>
          <div class="info-item flex items-center">
            负责人电话：<div>{{ orgData.phone }}</div>
          </div>
        </div>
        <div @click="handleDetail" class="text-white cursor-pointer detail-btn">
          查看<br />详情
        </div>
      </div>
      <Module :title="'消防安全制度建设'" :list="[1, 3, 4]" />
      <Module :title="'消防设施设备'" :list="[1, 3, 4]" />
      <Module :title="'消防安全检查'" :list="[1, 3, 4, 1, 3, 4]" />
    </BasicMapModal>
    <VideoModal v-model:modalValue="videoModalValue">
      <div class="flex h-100%">
        <div class="left w-25% mr-1% h-100% overflow-y-auto">
          <div
            v-for="(item, index) in videoList"
            :key="item.id"
            @click="playVideoItem(item)"
            :class="[
              'video-item p-3px bg-#1D334C mb-8px cursor-pointer border-1 border-solid border-#1D334C',
              activeVideo == index ? 'active' : '',
            ]"
          >
            <img
              src="@/assets/images/institution/4a13061a82e91b56e8f116ba94122d93备份 2@2x.png"
              alt=""
            />
            <div class="text-white mt-4px text-14px font-500 w-100% text-ellipsis">
              {{ item.name }}
            </div>
            <div class="address text-ellipsis">{{ item.address }}</div>
          </div>
        </div>
        <div class="right w-74% bg-red h-100%"></div>
      </div>
    </VideoModal>
  </PageWrapper>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
  .map {
    position: absolute;
    top: 0;
    left: 0;
  }
  .detail-btn {
    width: 44px;
    height: 44px;
    background: linear-gradient(144deg, #377fab 0%, #1d5084 100%);
    border-radius: 50%;
    text-align: center;
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info-item {
    font-family:
      PingFangSC,
      PingFang SC;
    font-size: 15px;
    color: #ffffff;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    div {
      font-weight: 400;
      font-size: 15px;
      color: rgba(255, 255, 255, 0.6);
      line-height: 21px;
      text-align: left;
      font-style: normal;
    }
  }
  // 视频
  .video-item {
    &.active {
      border: 2px solid #2eb0ff;
    }
    .address {
      width: 100%;
      color: rgba(255, 255, 255, 0.45);
      margin-top: 3px;
      font-size: 12px;
    }
  }
</style>
