<script setup lang="ts">
  import { useCockpitDataStore } from '@/stores/cockpitData';

  const parentData = inject('data') as ParentDataType;
  const { showMore } = parentData;
  const { getModuleName, getValue, getName } = useCockpitDataStore();
</script>

<template>
  <div class="container-bottom position-bottom-0 z-999 flex">
    <div class="w-50% mr-10px bg-#112034">
      <BasicBox :title="getModuleName('clockIn')" :size="'large'" :height="'200px'">
        <div class="left-container flex">
          <div class="flex main-container w-52%">
            <img src="@/assets/images/business/zbdk1.png" alt="" />
            <div>
              <span class="number">{{ getValue('clockIn', 0) }}</span>
              <span class="dw">班次</span>
              <div class="title">
                <div class="text-gradient"> {{ getName('clockIn', 0) }}</div>
              </div>
            </div>
          </div>
          <div class="flex main-container w-48%">
            <img src="@/assets/images/business/zbdk1.png" alt="" />
            <div>
              <span class="number">{{ getValue('clockIn', 1) }}</span>
              <span class="dw">班次</span>
              <div class="title">
                <div class="text-gradient"> {{ getName('clockIn', 1) }}</div>
              </div>
            </div>
          </div>
          <div class="flex main-container bottom-container w-52%">
            <img src="@/assets/images/business/zbdk2.png" alt="" />
            <div>
              <span class="number font1 cursor-pointer" @click="showMore(5)">{{
                getValue('clockIn', 2)
              }}</span>
              <span class="dw">家</span>
              <div class="title">
                <div class="text-gradient"> {{ getName('clockIn', 2) }}</div>
              </div>
            </div>
          </div>
          <div class="flex main-container bottom-container w-48%">
            <img src="@/assets/images/business/zbdk2.png" alt="" />
            <div>
              <span class="number font1 cursor-pointer" @click="showMore(6)">{{
                getValue('clockIn', 3)
              }}</span>
              <span class="dw">人次</span>
              <div class="title">
                <div class="text-gradient"> {{ getName('clockIn', 3) }}</div>
              </div>
            </div>
          </div>
        </div>
      </BasicBox>
    </div>
    <div class="w-50% bg-#112034">
      <BasicBox :title="getModuleName('fireDrillAndTraining')" :width="'50%'" :height="'200px'">
        <div class="right-container">
          <div>
            <div class="bg-container">
              <span class="number">{{ getValue('fireDrillAndTraining', 0) }}</span>
              <span class="dw">次</span>
            </div>
            <div class="title-container">
              <div class="text-gradient"> {{ getName('fireDrillAndTraining', 0) }}</div>
            </div>
          </div>
          <div>
            <div class="bg-container">
              <span class="number">{{ getValue('fireDrillAndTraining', 1) }}</span>
              <span class="dw">次</span>
            </div>
            <div class="title-container">
              <div class="text-gradient"> {{ getName('fireDrillAndTraining', 1) }}</div>
            </div>
          </div>
          <div>
            <div class="bg-container">
              <span class="number">{{ getValue('fireDrillAndTraining', 2) }}</span>
              <span class="dw">人次</span>
            </div>
            <div class="title-container">
              <div class="text-gradient"> {{ getName('fireDrillAndTraining', 2) }}</div>
            </div>
          </div>
        </div>
        <div class="footer-container flex">
          <img src="@/assets/images/business/pxjgs.png" alt="" class="img" />
          <div class="flex">
            <span class="title">{{ getName('fireDrillAndTraining', 3) }}</span>
            <span class="number cursor-pointer" @click="showMore(9)">
              {{ getValue('fireDrillAndTraining', 3) }}
            </span>
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
