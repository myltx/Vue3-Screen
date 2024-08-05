<script setup lang="ts"></script>

<template>
  <div class="flex justify-center top-container">
    <div class="flex justify-center item-container">
      <img src="@/assets/images/institution/left1.png" class="img" />
      <div class="right-container">
        <span class="font1">214</span>
        <span class="font2">家</span>
        <span class="font3">已接入养老机构</span>
      </div>
    </div>
    <div class="flex justify-center item-container">
      <img src="@/assets/images/institution/left2.png" class="img" />
      <div class="right-container">
        <span class="font1 color2">206</span>
        <span class="font2">台</span>
        <span class="font3">消防感知设备</span>
      </div>
    </div>
    <div class="flex justify-center item-container">
      <img src="@/assets/images/institution/left3.png" class="img" />
      <div class="right-container">
        <span class="font1 color3">6</span>
        <span class="font2">个</span>
        <span class="font3">消防器材</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .top-container {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 999;
    .item-container {
      width: 220px;
      height: 80px;
      border: 2px solid #3e7899;
      padding: 10px;
      &.item-container:nth-child(2) {
        margin: 0 16px;
      }
      .img {
        width: 49px;
        height: 56px;
        margin: 0 17px 12px 0;
      }

      .right-container {
        // margin-top: 11px;

        .font1 {
          width: 56px;
          height: 32px;
          font-family: PangMenZhengDao, PangMenZhengDao;
          font-weight: normal;
          font-size: 32px;
          color: #00e3f8;
          line-height: 37px;
          letter-spacing: 2px;
          text-align: left;
          font-style: normal;
        }

        .font2 {
          width: 13px;
          height: 18px;
          margin-left: 2px;
          font-family:
            PingFangSC,
            PingFang SC;
          font-weight: 400;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.49);
          line-height: 18px;
          text-align: left;
          font-style: normal;
        }

        .font3 {
          display: block;
          height: 22px;
          font-family:
            PingFangSC,
            PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
          line-height: 22px;
          text-align: left;
          font-style: normal;
        }

        .color2 {
          color: #00fd97;
        }

        .color3 {
          color: #2eb0ff;
        }

        .color4 {
          color: #c8eaff;
        }
      }
    }
  }
</style>
