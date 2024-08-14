<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array<{ [key: string]: any }>,
      default: () => [],
    },
  });
</script>
<template>
  <div class="mt-16px">
    <div class="module-title">
      <div>{{ props.title }}</div>
    </div>
    <div class="module-content-list">
      <div class="module-content-item" v-for="(item, index) in props.list" :key="index">
        <div class="module-content-item-title">{{ item.name }}</div>
        <div class="module-content-item-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .module-title {
    position: relative;
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 600;
    font-size: 17px;
    color: #ffffff;
    text-align: left;
    font-style: normal;
    height: 30px;
    div {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 155px;
      height: 10px;
      background: linear-gradient(90deg, #0ebefb 0%, rgba(56, 179, 255, 0) 100%);
      opacity: 0.46;
    }
  }
  .module-content-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .module-content-item {
      flex: 0 0 calc(33.33% - 12px);
      background: #182b3f;
      border-radius: 4px;
      border: 1px dashed rgba(73, 132, 185, 0.42);
      padding: 5px 8px;
      margin-top: 12px;
      .module-content-item-title {
        text-align: center;
        font-family:
          PingFangSC,
          PingFang SC;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        font-style: normal;
      }
      .module-content-item-value {
        font-family: PangMenZhengDao, PangMenZhengDao;
        font-weight: normal;
        font-size: 22px;
        color: #6ed2ff;
        font-style: normal;
        text-align: center;
        margin-top: 4px;
      }
    }
  }
</style>
