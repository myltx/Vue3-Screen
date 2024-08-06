<script setup lang="ts">
  import { getPwixunList, getYuanList } from '@/api/cockpit/cockpit';
  import { useSettingStore } from '@/stores';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
  import xfDetailModel from './xfDetailModel.vue';

  const { getModuleName, getValue, getRule } = useCockpitDataStore();
  const moduleKey = 'dutySituation';
  const settingStore = useSettingStore();
  const { indexConfig } = storeToRefs(settingStore);
  const alarmList = ref<any[]>([]);
  const isVisible = ref<boolean>(false)
  // const fileList = ref([]);

  const isScroll = computed(() => {
    return indexConfig.value.leftBottomSwiper;
  });
  function handleClose(val: boolean) {
    isVisible.value = val
  }
  async function handleListClick(item:any) {
    isVisible.value = true
  // openMapModal.value = true
  }
  getAllList();
  function getAllList() {
    getYuanList({
      currentPage: 1,
      pageSize: 1,
      modelId: '550662278131745157',
      menuId: '550662341197300101',
      queryJson: '',
      superQueryJson: '',
      sidx: '-start_time',
    }).then((res: any) => {
      console.log(res, 'r');
      res.data.list.forEach((item: any) => {
        item.type = '1';
        item.sign_time && (item.sign_time = item.sign_time.replace(/-/g, '.'));
      });
      alarmList.value = [...alarmList.value, ...res.data.list];
    });
    getPwixunList({
      currentPage: 1,
      pageSize: 2,
      modelId: '550674121361457541',
      menuId: '550682426959987077',
      queryJson: '',
      superQueryJson: '',
      sidx: '-F_CreatorTime',
    }).then((res: any) => {
      console.log(res, 'rr');
      res.data.list.forEach((item: any) => {
        item.type = '2';
        item.sign_time && (item.sign_time = item.sign_time.replace(/-/g, '.'));
      });
      alarmList.value = [...alarmList.value, ...res.data.list];
    });
  }
</script>

<template>
  <div class="container-bottom position-bottom-0 z-999 flex">
    <div class="w-50% mr-10px bg-#112034">
      <BasicBox :title="getModuleName(moduleKey)" :size="'large'">
        <div class="scroll">
          <div class="th-body flex w-100%">
            <div
              :class="[
                'th text-left text-16px pb-8px px-8px z-999 bg-#112034',
                [0, 1].includes(index) ? 'w-30%' : 'w-20%',
              ]"
              v-for="(th, index) in getRule(moduleKey, 0).filter((item: any) => item.key != 'id')"
              :key="th.key"
            >
              {{ th.title }}
            </div>
          </div>
          <vue3-seamless-scroll
            :list="getValue(moduleKey, 0)"
            hover
            v-model="isScroll"
            :limitScrollNum="3"
            :step="0.4"
          >
            <div class="overflow-y-hidden">
              <div class="td flex w-100%" v-for="item in getValue(moduleKey, 0)" :key="item.id">
                <div class="td-content w-30%" :title="item.time">
                  {{ item.time }}
                </div>
                <div class="td-content w-30%" :title="item.timeFrame">
                  {{ item.timeFrame }}
                </div>
                <div class="td-content w-20%" :title="item.userName">
                  {{ item.userName }}
                </div>
                <div class="td-content w-20%" :title="item.status">
                  <div
                    v-if="item.status == '在岗'"
                    class="flex items-center justify-center bg-gradient-to-br from-#01C69A to-#0099AC rounded-6px w-48px h-24px text-13px"
                  >
                    {{ item.status }}
                  </div>
                  <div
                    v-else-if="item.status == '待打卡'"
                    class="flex items-center justify-center bg-gradient-to-br from-#1884D5 to-#0066AC rounded-6px w-48px h-24px text-13px"
                  >
                    {{ item.status }}
                  </div>
                  <div
                    v-else
                    class="flex items-center justify-center bg-gradient-to-br from-#F78989 to-#F52727 rounded-6px w-48px h-24px text-13px"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </vue3-seamless-scroll>
        </div>
      </BasicBox>
    </div>
    <div class="w-50% bg-#112034">
      <BasicBox :title="getModuleName('fireDrillAndTraining')" :width="'50%'" :height="'200px'">
        <div class="flex h-90%">
          <div class="swipter-container">
            <a-carousel autoplay>
              <div class="h-100%">
                <img src="@/assets/images/institution/video.png" alt="" />
              </div>
              <div class="h-100%">
                <img src="@/assets/images/institution/video.png" alt="" />
              </div>
              <div class="h-100%">
                <img src="@/assets/images/institution/video.png" alt="" />
              </div>
              <div class="h-100%">
                <img src="@/assets/images/institution/video.png" alt="" />
              </div>
            </a-carousel>
          </div>
          <div class="right-container">
            <div class="item-container" v-for="events in alarmList" :key="events.id">
              <div class="flex items-center justify-between item" @click="handleListClick(item)">
                <div :class="['catagory', events.type == '2' ? 'active' : '']">
                  <span>
                    {{ events.type == '1' ? '消防演练' : '消防培训' }}
                  </span>
                </div>
                <div class="title">{{ events.name }}</div>
                <div class="time">{{ events.sign_time }}</div>
              </div>
              <div class="location">{{ events.address }}</div>
            </div>
          </div>
        </div>
      </BasicBox>
    </div>
  </div>
  <xfDetailModel :isVisible="isVisible" @closeModel="handleClose"/>
</template>

<style scoped lang="scss">
  @import './styles/bottom.scss';

  .ant-carousel :deep(.slick-slide) {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  :deep(.slick-dots) {
    padding-top: 20px !important;
  }

  .ant-carousel :deep(.slick-slide h3) {
    color: #fff;
  }
</style>
