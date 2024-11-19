<script lang="ts" setup>
  import { vue3ScrollSeamless } from 'vue3-scroll-seamless';
  export interface Headers {
    key: string;
    style: Object;
    title: string;
  }
  interface ClassOption {
    step?: number;
    limitMoveNum?: number;
    hoverStop?: boolean;
    direction?: string;
    singleHeight?: number;
    waitTime?: number;
    switchDelay?: number;
  }
  interface Props extends ClassOption {
    headers: Headers[];
    rows: { [key: string]: string }[];
    scrollAuto: boolean;
    height?: string | number;
    classOptions: Object;
  }
  const props = withDefaults(defineProps<Props>(), {
    scrollAuto: true,
  });
  const defaultClassOption = Object.assign(
    {
      limitMoveNum: 6,
      direction: 1,
      hoverStop: true,
      step: 1,
    },
    props.classOptions,
  );
</script>

<template>
  <div
    class="auto-scroll-table"
    :style="{ height: props.height ? props.height + 'px' : '100%' }"
    ref="tableContainer"
  >
    <div
      class="w-100% flex thead py-6px px-16px color-#4EA4FF text-12px font-500 h-28px"
      v-if="props.headers.length"
    >
      <div
        class="flex-1"
        v-for="th in props.headers.filter((item) => item.key !== 'id')"
        :key="th?.key"
        :style="{
          ...(th.style ? th?.style : {}),
        }"
      >
        {{ th?.title }}
      </div>
    </div>
    <!-- 这一层是tr -->
    <template v-if="props.rows.length">
      <div class="tbody" v-if="props.scrollAuto">
        <vue3ScrollSeamless
          class="scroll-wrap"
          :classOptions="defaultClassOption"
          :dataList="props.rows"
        >
          <div class="flex px-16px py-6px tr text-12px" v-for="row in props.rows" :key="row?.id">
            <div
              class="flex-1 td"
              :style="{
                ...(th?.style ? th.style : {}),
              }"
              v-for="th in props.headers.filter((item) => item.key !== 'id')"
              :key="th.key"
            >
              {{ row[th?.key] }}
            </div>
          </div>
        </vue3ScrollSeamless>
      </div>
      <div class="tbody overflow-y-auto" v-else>
        <div class="flex px-16px py-6px tr text-12px" v-for="row in props.rows" :key="row.id">
          <div
            class="flex-1 td"
            v-for="th in props.headers.filter((item) => item.key !== 'id')"
            :key="th.key"
          >
            {{ row[th.key] }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
  .thead {
    background-color: rgba(78, 164, 255, 0.2);
  }
  .tr:nth-child(2n) {
    background-color: rgba(78, 164, 255, 0.1);
  }
  .td {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis; //文本溢出显示省略号
    white-space: nowrap; //文本不会换行
  }
  .scroll-wrap {
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .tbody {
    height: 90%;
  }
</style>
