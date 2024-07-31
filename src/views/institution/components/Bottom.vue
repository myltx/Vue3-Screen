<script setup lang="ts">
  interface AlarmListType {
    catagory: string;
    title: string;
    time: string;
    location: string;
  }
  const alarmList = ref<AlarmListType[]>([]);

</script>

<template>
  <div class="container-bottom position-bottom-0 z-999 flex">
    <div class="w-50% mr-10px bg-#112034">
      <BasicBox :title="'消防值班情况'" :size="'large'">21313</BasicBox>
    </div>
    <div class="w-50% bg-#112034">
      <BasicBox :title="'消防演练与培训'" :width="'50%'">
        <div class="flex">
          <div class="swipter-container">
            <a-carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </a-carousel>
            <!-- <img /> -->
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
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
