<script setup lang="ts">
  import dayjs from 'dayjs';
  import decryptString from '@/utils/jnpf';
  import DZG_IMG from '@/assets/images/institution/dzg.png';
  import WYS_IMG from '@/assets/images/institution/dys.png';
  import YZG_IMG from '@/assets/images/institution/dzg.png';
  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false,
    },
    yhDetailData: {
      type: Object,
      default: () => {},
    },
    yhData: {
      type: Object,
      default: () => {},
    },
    imgList: {
      type: Array,
      default: () => [],
    },
  });
  watch(
    () => props.isVisible,
    (value) => {
      openModal.value = value;
    },
  );
  const emits = defineEmits(['closeModel']);
  const openModal = ref<boolean>(false);
  const rectificationProgressType: {
    [key in number]: string;
  } = {
    1: '上报隐患',
    2: '推送点位负责人',
    3: '指派其他人员',
    4: '待验收',
    5: '已整改',
  };
  const statusHiddenImgMap: {
    [key in number]: string;
  } = {
    1: DZG_IMG,
    2: WYS_IMG,
    3: YZG_IMG,
  };
  const statusHiddenClass: {
    [key in number]: string;
  } = {
    1: 'dzg',
    2: 'wys',
    3: 'yzg',
  };
  const handleClose = () => {
    emits('closeModel', false);
  };
</script>
<template>
  <div>
    <BasicModal v-model:modalValue="openModal" :title="'隐患记录详情'" @closed="handleClose">
      <div class="ml-16px mr-34px main-container flex">
        <div class="left-container w-50%">
          <div class="left-title flex">
            <img :src="statusHiddenImgMap[yhData.status]" alt="" class="mr-4px" />
            <span :class="statusHiddenClass[yhData.status]">{{ yhData.statusText }}</span>
          </div>
          <div class="mt-16px">
            <a-tooltip>
              <template #title
                >【隐患描述】{{ yhDetailData?.sffFireDangerDTO?.dangerRemark }}</template
              >
              <div
                class="detail"
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                "
                >【隐患描述】{{ yhDetailData?.sffFireDangerDTO?.dangerRemark }}</div
              >
            </a-tooltip>
          </div>
          <div class="tip-container mt-20px">
            <div class="bg"></div>
            <div class="title">隐患信息</div>
          </div>
          <div class="middle-container ml-4px mb-8px">
            <span class="tip">上报时间：</span>
            <span class="time ml-8px">
              {{ yhData?.date }}
            </span>
          </div>
          <div class="middle-container ml-4px mb-8px">
            <span class="tip">隐患地点：</span>
            <span class="time ml-8px">{{ yhData?.subscribe }}</span>
          </div>
          <div class="middle-container ml-4px mb-8px">
            <span class="tip">上报人：</span>
            <span class="time ml-8px">{{ yhData?.name }}</span>
          </div>
          <div class="middle-container ml-4px mb-8px flex">
            <span class="fj">附件：</span>
            <span class="img-container flex">
              <img v-for="(item, index) in imgList" :key="index" :src="item" alt="" class="img" />
            </span>
          </div>
        </div>
        <div class="right-container w-48% ml-5px">
          <div class="flex ml-30px">
            <div class="tip-container">
              <div class="bg"></div>
              <div class="title">隐患整改时间线</div>
            </div>
          </div>
          <div
            class="h-98px"
            v-for="(item, index) in yhDetailData?.sffFireDangerAssignDTOS"
            :key="index"
          >
            <div
              :class="[
                'zgx',
                index == yhDetailData?.sffFireDangerAssignDTOS.length - 1 ? 'no-border' : '',
              ]"
            >
              <span class="times ml-28px">{{
                dayjs(item['generationTime']).format('YYYY-MM-DD HH:mm:ss')
              }}</span>
              <div class="main mt-4px ml-20px">
                <div class="title mt-8px ml-8px"
                  >{{ rectificationProgressType[item.rectificationProgress] }}
                </div>
                <span class="person mt-4px ml-8px">上报人：</span>
                <span class="name">{{
                  decryptString(item?.targetChiefDTO?.encryptVal || '', 'ch20210825093727')
                }}</span>
              </div>
              <div class="mb-12px"></div>
            </div>
          </div>
        </div>
      </div>
    </BasicModal>
  </div>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
  @import './styles/yhDetailModel.scss';
</style>
