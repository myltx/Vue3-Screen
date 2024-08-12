<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import { Left, Right, Bottom, Main } from './components';
  import Module from './components/module.vue';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import MapIconImg from '@/assets/images/map/map-icon.png';
  import { modalType, moduleKeys } from './config';
  import { usePlayVideo } from '@/stores/videoPlay';

  const router = useRouter();
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
  const { interValGeyAllModuleData, getRule, getValue, getOneModule } = useCockpitDataStore();
  // 根据配置的 moduleKey 在页面动态获取数据
  startLoading();
  interValGeyAllModuleData(moduleKeys, endLoading);
  getList();
  const markerList = ref<{ [key: string]: any }[]>([]);

  const columns = ref<any>([]);

  const tabData = ref([]);

  async function markerClick(markerData: any) {
    orgData.value = markerData;
    const promiseList: any = [];
    const moduleList = moduleKeys['orgPage']?.map((item: string) => {
      const regexPattern = /^([^-]+)/;
      const match: string[] = regexPattern.exec(item) || [];
      return match[1] || '';
    });
    moduleList?.forEach((moduleKey: any) => {
      promiseList.push(
        getOneModule({
          pageKey: 'orgPage',
          moduleKey,
          moduleParam: markerData.orgId,
        }),
      );
    });

    const data = await Promise.all(promiseList);
    console.log(data, 'dd');
    orgData.value.modules = data.map((item) => item?.data?.kvList[0]);
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
  <PageWrapper :title="'大屏示例页面'">
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
          <div class="info-item flex items-center">
            消防站：<div>{{ orgData.fireStationName }} | {{ orgData.fireStationPhone }}</div>
          </div>
        </div>
        <div @click="handleDetail" class="text-white cursor-pointer detail-btn">
          查看<br />详情
        </div>
      </div>
      <Module
        v-for="(module, index) in orgData?.modules"
        :key="index"
        :title="module?.name"
        :list="module?.value"
      />
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
</style>
