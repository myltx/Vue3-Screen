<script setup lang="ts">
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
  import { equipmentOption } from './config';

  type ClickType = 'equipment';
  const isScroll = ref(false);
  setTimeout(() => {
    isScroll.value = true;
  }, 1000);
  const equipmentActive = ref(0);
  const option = ref({});
  const chartRef = ref(null); // 用于引用图表实例
  const list = ref([
    {
      value: 1,
      status: 1,
      text: 123,
    },
    {
      value: 1,
      status: 1,
      text: 123,
    },
    {
      value: 1,
      status: 1,
      text: 123,
    }, {
      value: 1,
      status: 1,
      text: 123,
    },
    {
      value: 1,
      status: 1,
      text: 123,
    },
    {
      value: 1,
      status: 1,
      text: 123,
    }, {
      value: 1,
      status: 1,
      text: 123,
    },
    {
      value: 1,
      status: 1,
      text: 123,
    },
    {
      value: 1,
      status: 1,
      text: 123,
    },
  ]);

  const handleType = (type: ClickType, value: number) => {
    switch (type) {
      case 'equipment':
        equipmentActive.value = value;
        setOption('option', equipmentOption);
        break;

      default:
        break;
    }
  };
  const setOption = (key: string, opt: any) => {
    switch (key) {
      case 'option':
        option.value = {};
        setTimeout(() => {
          option.value = opt;
        }, 1000);
        break;

      default:
        break;
    }
  };

  onMounted(() => {
    setOption('option', equipmentOption);
  });
</script>
<template>
  <PageWrapper :title="'大屏示例页面'">
    <div class="container-left mt-22px ml-16px">
      <BasicBox :title="'消防安全制度建设'">
        <div class="w-full h-full">
          <div class="flex justify-center items-center w-full">
            <div class="flex-1">
              <img
                src="@/assets/images/business/institution.png"
                alt=""
                class="h-90px w-90px mb-10px mx-auto"
              />
              <div class="text">消防安全制度</div>
            </div>
            <div class="flex-1">
              <img
                src="@/assets/images/business/duty.png"
                alt=""
                class="h-90px w-90px mb-10px mx-auto"
              />
              <div class="text">岗位安全责任书</div>
            </div>
            <div class="flex-1">
              <img
                src="@/assets/images/business/pre-plan.png"
                alt=""
                class="h-90px w-90px mb-10px mx-auto"
              />
              <div class="text">应急预案</div>
            </div>
          </div>
          <div class="flex space-between items-center w-full">
            <div class="flex-1 file-info">
              <div class="left-text">
                <div class="info-title">已上传</div>
                <div class="info-value">21</div>
                <div class="info-unit">家</div>
              </div>
              <div class="placeholder"></div>
              <div class="left-text">
                <div class="info-title">已上传</div>
                <div class="info-value">21</div>
                <div class="info-unit">家</div>
              </div>
            </div>
            <div class="flex-1 file-info mx-10px">
              <div class="left-text">
                <div class="info-title">已上传</div>
                <div class="info-value">21</div>
                <div class="info-unit">家</div>
              </div>
              <div class="placeholder"></div>
              <div class="left-text">
                <div class="info-title">已上传</div>
                <div class="info-value">21</div>
                <div class="info-unit">家</div>
              </div>
            </div>
            <div class="flex-1 file-info">
              <div class="left-text">
                <div class="info-title">已上传</div>
                <div class="info-value">21</div>
                <div class="info-unit">家</div>
              </div>
              <div class="placeholder"></div>
              <div class="left-text">
                <div class="info-title">已上传</div>
                <div class="info-value">21</div>
                <div class="info-unit">家</div>
              </div>
            </div>
          </div>
        </div>
      </BasicBox>
      <BasicBox :title="'消防设施设备'">
        <div class="equipment-top">
          <div
            :class="['equipment-item mr-5px', equipmentActive == 0 ? 'active' : '']"
            @click="handleType('equipment', 0)"
          >
            消防感知设备(267)
          </div>
          <div
            :class="['equipment-item mr-5px', equipmentActive == 1 ? 'active' : '']"
            @click="handleType('equipment', 1)"
          >
            消防器材(432)
          </div>
        </div>

        <div class="value-container">
          <div class="value-item"> 在线 <div class="value text-#3bdff6">256</div> </div>
          <div class="value-item placeholder"> 故障 <div class="value text-#E3B026">256</div> </div>
          <div class="value-item"> 离线 <div class="value text-#DD5858">256</div> </div>
        </div>
        <div class="chart-container">
          <div class="bar-chart-title">设备类型统计</div>
          <div class="bar-chart-unit">单位: <span>台</span></div>
          <v-chart
            class="chart"
            ref="chartRef"
            id="bar-chart"
            :option="option"
            v-if="Object.keys(option).length"
          />
        </div>
      </BasicBox>
      <BasicBox :title="'告警'">
        <div class="scroll">
          <vue3-seamless-scroll :list="list" hover v-model="isScroll" :limitScrollNum="10">
            <div class="item" v-for="(item, index) in list" :key="index">
              <span>{{ item.text }}</span>
              <span>{{ item.status }}</span>
            </div>
          </vue3-seamless-scroll>
        </div>
      </BasicBox>
    </div>
    <Map class="map" />
  </PageWrapper>
</template>

<style scoped lang="scss">
  .container-left {
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 9999;
    width: 400px;
    background: linear-gradient(180deg, rgba(0, 0, 1, 0.5) 0%, #091829 100%);
    backdrop-filter: blur(4px);
    .text {
      font-family: PangMenZhengDao;
      font-size: 18px;
      color: #ffffff;
      line-height: 21px;
      text-align: center;
      font-style: normal;
      background: linear-gradient(top, #ffffff 0%, #caf9ff 100%);
    }
    .file-info {
      position: relative;
      margin-top: 10px;
      height: 114px;
      background: linear-gradient(
        180deg,
        #0f3c67 0%,
        rgba(22, 67, 110, 0.29) 53%,
        rgba(29, 74, 116, 0) 100%
      );
      border-radius: 8px 8px 0px 0px;
      border: 2px solid;
      border-image: linear-gradient(
        to bottom,
        rgba(97, 204, 255, 1),
        rgba(29, 70, 89, 0.93),
        rgba(8, 40, 58, 0)
      );
      border-image-slice: 1;
      border-bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::after {
        content: '';
        position: absolute;
        top: -2px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 52px;
        height: 3px;
        background: #4fd3fe;
      }
      .left-text {
        width: calc((100% - 11px) / 2);
        text-align: center;
        padding: 2px;
        .info-title {
          font-family:
            PingFangSC,
            PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 20px;
          font-style: normal;
          text-transform: none;
        }
        .info-value {
          font-family: DINAlternate, DINAlternate;
          font-weight: bold;
          font-size: 32px;
          color: #ffffff;
          line-height: 37px;
          font-style: normal;
          margin: 10px 0;
        }
        .info-unit {
          font-family:
            PingFangSC,
            PingFang SC;
          font-weight: 400;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.49);
          line-height: 18px;
          font-style: normal;
        }
      }
      .placeholder {
        width: 1px;
        height: 90px;
        background: linear-gradient(
          180deg,
          rgba(79, 211, 254, 0) 0%,
          #4fd3fe 52%,
          rgba(216, 216, 216, 0) 100%
        );
        opacity: 0.53;
        margin: 0 5px;
      }
    }
    // 设备
    .equipment-top {
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .equipment-item {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 100%;
        flex: 1;
        background: url('@/assets/images/business/equipment-tag-bg.png') no-repeat;
        background-size: 100% 100%;
        &.active {
          background: url('@/assets/images/business/equipment-tag-bg-active.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .value-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      .value-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 600;
        font-size: 16px;
        color: #ffffff;
        line-height: 22px;
        text-align: left;
        font-style: normal;
        &.placeholder {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 2px;
            height: 20px;
            background: linear-gradient(
              180deg,
              rgba(114, 218, 245, 0) 0%,
              #72daf5 46%,
              rgba(114, 218, 245, 0) 100%
            );
            margin: 0 5px;
          }
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 2px;
            height: 20px;
            background: linear-gradient(
              180deg,
              rgba(114, 218, 245, 0) 0%,
              #72daf5 46%,
              rgba(114, 218, 245, 0) 100%
            );
            margin: 0 5px;
          }
        }
        .value {
          font-family:
            PingFangSC,
            PingFang SC;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          text-align: left;
          font-style: normal;
          margin-left: 5px;
        }
      }
    }
    .chart-container {
      margin-top: 10px;
      height: 70%;
      position: relative;
      .bar-chart-title {
        text-indent: 35px;
        height: 28px;
        width: 206px;
        background: url('@/assets/images/business/equipment-chart-title-bg.png') no-repeat;
        background-size: 100% 100%;
        font-family: PangMenZhengDao, PangMenZhengDao;
        font-weight: normal;
        font-size: 18px;
        color: #ffffff;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        background: linear-gradient(top, #ffffff 0%, #1f8dcb 100%);
        position: absolute;
        top: 0;
        z-index: 9999;
      }
      .bar-chart-unit {
        position: absolute;
        top: 5px;
        right: 0;
        z-index: 9999;
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 400;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.45);
        line-height: 18px;
        text-align: right;
        font-style: normal;
        span {
          color: #fff;
        }
      }
      #bar-chart {
        height: 100%;
        width: 100%;
      }
    }
    // 底部
    .scroll {
      overflow: hidden;
      height: 100%;
    }
  }
  .map {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
