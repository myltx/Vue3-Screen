<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import Bottom from './components/Bottom.vue';
  import Left from './components/Left.vue';
  import Main from './components/Main.vue';
  import Right from './components/Right.vue';
  import Module from './components/module.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import MapIconImg from '@/assets/images/map/map-icon.png';
  import { modalType, moduleKeys } from './config';
  import { usePlayVideo } from '@/stores/videoPlay';
  import { orgInfoJson } from '@/stores/cockpitData/index.data';

  // const router = useRouter();
  const { startLoading, endLoading } = useLoadingStore();
  const { isLoading } = storeToRefs(useLoadingStore());
  const { videoList, videoModalValue } = storeToRefs(usePlayVideo());
  const { playVideo, getList } = usePlayVideo();

  const mapRef = ref();
  const modalTitle = ref('');
  const open = ref(false);
  const openMapModal = ref(false);
  const parentData: ParentDataType = {
    videoList,
    playVideo,
    showMore,
  };
  watch(
    () => videoList.value,
    () => {
      parentData.videoList = videoList.value;
    },
  );
  provide('data', parentData);
  const orgData = ref<any>({});
  // getOneModule
  const { interValGeyAllModuleData, getRule, getValue } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  startLoading();
  interValGeyAllModuleData(moduleKeys, endLoading);
  getList();
  const markerList = ref<{ [key: string]: any }[]>([]);

  const columns = ref<any>([]);

  const tabData = ref([]);

  async function markerClick(markerData: any) {
    orgData.value = markerData;
    // const promiseList: any = [];
    // const moduleList = moduleKeys['orgPage']?.map((item: string) => {
    //   const regexPattern = /^([^-]+)/;
    //   const match: string[] = regexPattern.exec(item) || [];
    //   return match[1] || '';
    // });
    // moduleList?.forEach((moduleKey: any) => {
    //   promiseList.push(
    //     getOneModule({
    //       pageKey: 'orgPage',
    //       moduleKey,
    //       moduleParam: markerData.orgId,
    //     }),
    //   );
    // });

    // let data = await Promise.all(promiseList);
    const data = orgInfoJson;
    console.log(data, 'dd');
    orgData.value.modules = data.map((item) => item?.data);
    openMapModal.value = true;
  }
  // 获取模块标题
  function getModuleName(moduleName: string) {
    return moduleName.replace(/[\(（].*?[\)）]/g, '');
  }
  // function handleDetail() {
  //   router.push({
  //     path: '/institution',
  //     query: {
  //       orgId: orgData.value.orgId,
  //       name: orgData.value.name,
  //       back: 1,
  //     },
  //   });
  // }
  watch(
    () => isLoading.value,
    (val) => {
      if (!val) {
        markerList.value = [];
        const orgList = getValue('map', 0);
        orgList?.forEach((item: any) => {
          const lngLat = item.orgLngLat ? item.orgLngLat.split(',') : [];
          if (lngLat && lngLat.length) {
            item.lng = Number(lngLat[0]);
            item.lat = Number(lngLat[1]);
          }
          item.icon = MapIconImg;
        });
        markerList.value = orgList;
      }
    },
  );
  function cleanMarkerActive() {
    orgData.value = {};
    mapRef.value?.cleanMarkerActive();
  }

  function showMore(type: number) {
    open.value = false;
    const { key, title, index, columns: col } = modalType[type];
    const rules = getRule(key, index || 0);
    console.log(rules, 'r');
    columns.value = col;
    tabData.value = getValue(key, index || 0);
    modalTitle.value = title;
    setTimeout(() => {
      open.value = true;
    }, 300);
  }
</script>
<template>
  <PageWrapper :title="'智慧消防物联网监控感知平台'">
    <Left v-if="!isLoading" v-motion-slide-left />
    <Right v-if="!isLoading" v-motion-slide-right />
    <Bottom v-if="!isLoading" v-motion-slide-visible-bottom />
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
      <div class="info flex justify-between items-start pb-10px">
        <div>
          <div class="info-item flex">
            地址：<div class="w-200px">{{ orgData.address }}</div>
          </div>
          <div class="info-item flex items-center my-4px">
            机构安全负责人：<div>{{ orgData.userName }}</div>
          </div>
          <div class="info-item flex items-center">
            负责人电话：<div>{{ orgData.phone }}</div>
          </div>
          <div class="info-item flex items-center">
            消防站：<div>
              {{ orgData.fireStationName }} {{ orgData.fireStationPhone ? '|' : '' }}
              {{ orgData.fireStationPhone }}
            </div>
          </div>
        </div>
        <!-- <div @click="handleDetail" class="text-white cursor-pointer detail-btn">
          查看<br />详情
        </div> -->
      </div>
      <div class="h-300px overflow-y-auto">
        <Module
          v-for="(module, index) in orgData?.modules"
          :key="index"
          :title="getModuleName(module?.moduleName)"
          :list="module?.kvList"
        />
      </div>
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
  :deep(.ant-table-body) {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  :deep(.ant-table-cell-scrollbar) {
    box-shadow: none !important;
  }
</style>
