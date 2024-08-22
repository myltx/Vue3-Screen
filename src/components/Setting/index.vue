<script setup lang="ts">
  import { useSettingStore } from '@/stores/index';
  import { GithubOutlined } from '@ant-design/icons-vue';

  // const router = useRouter();
  const isScaleRadio = ref(true);
  const leftBottomRadio = ref(true);
  const rightBottomRadio = ref(true);
  const intervalUpdateData = ref(false);
  const settingStore = useSettingStore();
  const { indexConfig } = storeToRefs(settingStore);

  const init = () => {
    settingStore.initSetting();
    isScaleRadio.value = settingStore.isScale;

    leftBottomRadio.value = indexConfig.value.leftBottomSwiper;
    rightBottomRadio.value = indexConfig.value.rightBottomSwiper;
    intervalUpdateData.value = indexConfig.value.intervalUpdateData;
  };
  init();
  // const handleClose = () => {};

  // const cancelClick = () => {
  //   settingStore.setSettingShow(false);
  // };

  // const confirmClick = () => {};
  const isScaleChange = () => {
    settingStore.setIsScale(isScaleRadio.value);
  };
  // const radiochange = (blag: boolean) => {
  //   settingStore.setIsScale(blag);
  //   // this.$store.commit('setting/updateSwiper', { val, type })
  // };
  const indexRadioChange = () => {
    settingStore.setIndexConfig({
      leftBottomSwiper: leftBottomRadio.value, //左轮播
      rightBottomSwiper: rightBottomRadio.value, //右下轮播
      intervalUpdateData: intervalUpdateData.value, // 定时更新数据
    });
  };
  // function go(path: string) {
  //   settingStore.setSettingShow(false);
  //   router.push({
  //     path,
  //   });
  // }
</script>

<template>
  <a-drawer v-model:open="settingStore.settingShow" placement="right">
    <template #title>
      <h2 class="setting-title">设置</h2>
    </template>
    <template #default>
      <div class="left_shu">全局设置</div>
      <div class="setting_item">
        <span class="setting_label">
          是否进行自动适配<span class="setting_label_tip">(默认分辨率1920*1080)</span>:
        </span>
        <div class="setting_content">
          <a-radio-group v-model:value="isScaleRadio" @change="isScaleChange">
            <a-radio :value="true">是</a-radio>
            <a-radio :value="false">否</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="setting_item mt-20px">
        <a-space>
          <a-button
            href="https://github.com/myltx/Vue3-Screen"
            target="_blank"
            class="flex items-center"
          >
            <GithubOutlined />
            源码地址
          </a-button>

          <!-- <a-button @click="go('/dataConfig/excelToJson')">ExCelToJson</a-button> -->
        </a-space>
      </div>
      <template v-if="false">
        <div class="left_shu">实时监测</div>
        <div class="setting_item">
          <span class="setting_label">
            是否定时更新数据:
            <span class="setting_label_tip"></span>
          </span>
          <div class="setting_content">
            <a-radio-group v-model:value="intervalUpdateData" @change="indexRadioChange">
              <a-radio :value="true">是</a-radio>
              <a-radio :value="false">否</a-radio>
            </a-radio-group>
          </div>
        </div>
        <div class="setting_item">
          <span class="setting_label"> 告警轮播: <span class="setting_label_tip"></span> </span>
          <div class="setting_content">
            <a-radio-group v-model:value="leftBottomRadio" @change="indexRadioChange">
              <a-radio :value="true">是</a-radio>
              <a-radio :value="false">否</a-radio>
            </a-radio-group>
          </div>
        </div>
        <div class="setting_item">
          <span class="setting_label"> 右侧轮播: </span>
          <div class="setting_content">
            <a-radio-group v-model:value="rightBottomRadio" @change="indexRadioChange">
              <a-radio :value="true">是</a-radio>
              <a-radio :value="false">否</a-radio>
            </a-radio-group>
          </div>
        </div>
      </template>
    </template>
    <!-- <template #footer>
      <div style="flex: auto">
        <a-button @click="cancelClick">取消</a-button>
        <a-button type="primary" @click="confirmClick">确定</a-button>
      </div>
    </template> -->
  </a-drawer>
</template>

<style scoped lang="scss">
  .setting-title {
    font-size: 20px;
    color: #000;
    font-weight: 900;
    text-align: center;
    line-height: 1;
  }
  .left_shu {
    color: #000;
    font-weight: 900;
    position: relative;
    text-indent: 10px;
    padding: 16px 0 10px 0;
    line-height: 1;
    &::before {
      display: block;
      content: ' ';
      height: 16px;
      width: 4px;
      border-radius: 2px;
      background: #0072ff;
      position: absolute;
      left: 0px;
    }
  }
  .setting_item {
    font-size: 14px;
    line-height: 1.5;

    // display: flex;
    .setting_label {
      color: #555454;
    }
    .setting_label_tip {
      font-size: 12px;
      color: #838282;
    }
  }
</style>
