<script setup lang="ts"></script>
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
          <div class="equipment-item active mr-5px">消防感知设备(267)</div>
          <div class="equipment-item ml-5px">消防器材(432)</div>
        </div>
      </BasicBox>
      <BasicBox :title="'消防安全制度建设'" />
    </div>
  </PageWrapper>
</template>

<style scoped lang="scss">
  .container-left {
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
  }
</style>
