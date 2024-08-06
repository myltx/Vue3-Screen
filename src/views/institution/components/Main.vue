<script setup lang="ts">
  import DetaultOrgImg from '@/assets/images/institution/default-org-img.png';
</script>

<template>
  <div class="bg-container">
    <img :src="DetaultOrgImg" alt="" class="org-img" />
    <img src="@/assets/images/institution/mask-bg.png" alt="" class="bg-img" />
    <div class="flex justify-center top-container">
      <div class="flex justify-center item-container">
        <img src="@/assets/images/institution/left1.png" class="img" />
        <div class="right-container">
          <span class="font1">214</span>
          <span class="font2">台</span>
          <span class="font3">消防感知设备</span>
        </div>
      </div>
      <div class="flex justify-center item-container">
        <img src="@/assets/images/institution/left2.png" class="img" />
        <div class="right-container">
          <span class="font1 color2">206</span>
          <span class="font2">台</span>
          <span class="font3">在线设备</span>
        </div>
      </div>
      <div class="flex justify-center item-container">
        <img src="@/assets/images/institution/left3.png" class="img" />
        <div class="right-container">
          <span class="font1 color3">6</span>
          <span class="font2">条</span>
          <span class="font3">未处理告警</span>
        </div>
      </div>
      <div class="flex justify-center item-container">
        <img src="@/assets/images/institution/left4.png" class="img" />
        <div class="right-container">
          <span class="font1 color4">12</span>
          <span class="font2">条</span>
          <span class="font3">待整改隐患</span>
        </div>
      </div>
    </div>
    <!-- <div class="w-50% mr-10px bg-#112034">
      <BasicBox :title="'消防安全制度建设'" :size="'large'">21313</BasicBox>
    </div>
    <div class="w-50% bg-#112034">
      <BasicBox :title="'消防安全制度建设'" :width="'50%'">21313</BasicBox>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
  // @import './styles/bottom.scss';

  .bg-container {
    width: 1920px;
    height: 1080px;
    // background: url('@/assets/images/institution/mask-bg.png') no-repeat;
    // background-size: 100% 100%;
    .top-container {
      .item-container {
        width: 198px;
        height: 80px;
        margin-top: 99px;
        margin-right: 16px;
        border: 2px solid #3e7899;
        z-index: 10;

        .img {
          width: 49px;
          height: 56px;
          margin: 12px 17px 12px 0;
        }

        .right-container {
          margin-top: 11px;

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
            width: 96px;
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
    .bg-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      z-index: 3;
    }
    .org-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1500px;
      height: 1000px;
      z-index: 1;
    }
  }
</style>
