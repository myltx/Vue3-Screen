<script setup lang="ts">
  import { useSettingStore } from '@/stores';
  import { useCockpitDataStore } from '@/stores/cockpitData';
  import dayjs from 'dayjs';
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
  interface AlarmListType {
    catagory: string;
    title: string;
    time: string;
    location: string;
  }

  const { getModuleName, getValue, getRule } = useCockpitDataStore();
  const moduleKey = 'dutySituation';
  console.log(getValue(moduleKey, 0));
  const settingStore = useSettingStore();
  const { indexConfig } = storeToRefs(settingStore);
  const alarmList = ref<AlarmListType[]>([]);
  const isScroll = computed(() => {
    return indexConfig.value.leftBottomSwiper;
  });

  generateList();
  function generateList() {
    const statusTextMap: {
      [key in number]: string;
    } = {
      1: '普通告警',
      2: '重要告警',
      3: '紧急告警',
    };
    for (let i = 0; i < 11; i++) {
      const status = getRandomInt(1, 3);
      alarmList.value.push({
        content: '设备：13号智能烟感设备',
        subscribe: '厨房餐厅',
        status,
        statusText: statusTextMap[status],
        date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      });
    }
  }
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
</script>

<template>
  <div class="container-bottom position-bottom-0 z-999 flex">
    <div class="w-50% mr-10px bg-#112034">
      <BasicBox :title="getModuleName(moduleKey)" :size="'large'">
        <div class="scroll">
          <div class="th-body flex w-100%">
            <div
              class="th w-25% text-left text-16px pb-8px px-8px z-999 bg-#112034"
              v-for="th in getRule(moduleKey, 0).filter((item: any) => item.key != 'id')"
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
                <div class="td-content" :title="item.time">
                  {{ item.time }}
                </div>
                <div class="td-content" :title="item.timeFrame">
                  {{ item.timeFrame }}
                </div>
                <div class="td-content" :title="item.userName">
                  {{ item.userName }}
                </div>
                <div class="td-content" :title="item.status">
                  {{ item.status }}
                </div>
              </div>
            </div>
          </vue3-seamless-scroll>
        </div>
      </BasicBox>
    </div>
    <div class="w-50% bg-#112034">
      <BasicBox :title="'消防演练与培训'" :width="'50%'" :height="'200px'">
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
            <div class="item-container">
              <div class="catagory"><span>消防演练</span></div>
              <div class="title">四月消防演练</div>
              <div class="time">2024.11.05</div>
              <div class="location">泰康养老院托养一区-一层101活动室</div>
            </div>
            <div class="item-container">
              <div class="catagory"><span>消防演练</span></div>
              <div class="title">四月消防演练</div>
              <div class="time">2024.11.05</div>
              <div class="location">泰康养老院托养一区-一层101活动室</div>
            </div>
            <div class="item-container">
              <div class="catagory"><span>消防演练</span></div>
              <div class="title">四月消防演练</div>
              <div class="time">2024.11.05</div>
              <div class="location">泰康养老院托养一区-一层101活动室</div>
            </div>
          </div>
        </div>
      </BasicBox>
    </div>
  </div>
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
