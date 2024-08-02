<script setup lang="ts"></script>

<template>
  <div class="container-bottom position-bottom-0 z-999 flex">
    <div class="w-50% mr-10px bg-#112034">
      <BasicBox :title="'值班打卡'" :size="'large'" :height="'200px'">
        <div class="left-container flex">
          <div class="flex main-container w-52%">
            <img src="@/assets/images/business/zbdk1.png" alt="">
            <div>
              <span class="number">1520</span>
              <span class="dw">班次</span>
              <div class="title">累计值班任务</div>
            </div>
          </div>
          <div class="flex main-container w-48%">
            <img src="@/assets/images/business/zbdk1.png" alt="">
            <div>
              <span class="number">1284</span>
              <span class="dw">班次</span>
              <div class="title">累计完成值班数</div>
            </div>
          </div>
          <div class="flex main-container bottom-container w-52%">
            <img src="@/assets/images/business/zbdk2.png" alt="">
            <div>
              <span class="number font1">23</span>
              <span class="dw">家</span>
              <div class="title">今日已值班打卡机构数</div>
            </div>
          </div>
          <div class="flex main-container bottom-container w-48%">
            <img src="@/assets/images/business/zbdk2.png" alt="">
            <div>
              <span class="number font1">86</span>
              <span class="dw">人次</span>
              <div class="title">今日已完成值班打卡</div>
            </div>
          </div>
        </div>
      </BasicBox>
    </div>
    <div class="w-50% bg-#112034">
      <BasicBox :title="'消防演练与培训'" :width="'50%'" :height="'200px'">
        <div class="right-container">
          <div>
            <div class="bg-container">
              <span class="number">27</span>
              <span class="dw">次</span>
            </div>
            <div class="title-container">消防演练总次数</div>
          </div>
          <div>
            <div class="bg-container">
              <span class="number">19</span>
              <span class="dw">次</span>
            </div>
            <div class="title-container">消防培训总次数</div>
          </div>
          <div>
            <div class="bg-container">
              <span class="number last-number">262</span>
              <span class="dw last-dw">人次</span>
            </div>
            <div class="title-container last-title">消防培训人次</div>
          </div>
        </div>
        <div class="footer-container flex">
          <img src="@/assets/images/business/pxjgs.png" alt="" class="img">
          <div class="flex">
            <span class="title">近半年未组织消防培训机构数</span>
            <span class="number">10</span>
            <span class="dw">家</span>
          </div>
        </div>
      </BasicBox>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './styles/bottom.scss';
</style>
