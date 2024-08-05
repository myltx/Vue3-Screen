<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
  .ant-table {
    background: rgba(0, 0, 0, 0) !important;
    font-size: 14px !important;
    font-family:
      PingFangSC,
      PingFang SC !important;
    color: #fff !important;
    th {
      color: rgba(255, 255, 255, 0.65) !important;
      font-size: 14px !important;
      background: rgba(0, 0, 0, 0) !important;
      font-family:
        PingFangSC,
        PingFang SC !important;
      border: 0px !important;
      border-bottom: 1px solid #004a72 !important;
      &::before {
        background-color: rgba(0, 0, 0, 0) !important;
      }
    }
    tr {
      border: 0px !important;
    }
    tr:first-child > *:first-child {
      border-start-start-radius: 0 !important;
    }
    tr:first-child > *:last-child {
      border-start-end-radius: 0 !important;
    }
  }
  tr:hover {
    background: rgba(0, 0, 0, 0) !important;
  }
  td {
    background: rgba(0, 0, 0, 0) !important;
    border: 0px !important;
    border-bottom: 1px solid #004a72 !important;
  }
</style>
