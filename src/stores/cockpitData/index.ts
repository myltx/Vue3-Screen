import { defineStore } from 'pinia';
import { useMessage } from '@/hooks/useMessage';
import { isFunction, isObject } from '@/utils/is';
import { getModule } from '@/api/cockpit/cockpit';
import { cloneDeep } from 'lodash-es';

const { createMessage } = useMessage();
export const useCockpitDataStore = defineStore('cockpitData', () => {
  // 根据配置的 moduleKey 在页面动态获取数据
  const promiseList: Promise<any>[] = [];
  const kvLists = ref<{ [key: string]: any }>({});
  const allData = ref<{ [key: string]: any }>({});
  //   异步根据页面所有模块配置获取数据
  async function getALlModuleData(pageKey: string, moduleKeys: ModuleKeyType, callBack: Function) {
    kvLists.value = {};
    allData.value = {};
    if (isObject(moduleKeys)) {
      for (const key in moduleKeys) {
        promiseList.push(
          getModule({
            pageKey,
            moduleKey: moduleKeys[key],
            moduleParam: '',
          }),
        );
      }
      const data = await Promise.all(promiseList);
      if (data.length) {
        data.forEach((item: any) => {
          kvLists.value[item.data.moduleKey] = item.data?.kvList;
          allData.value[item.data.moduleKey] = item.data;
        });
        console.log(allData.value, ' allData.value');
      }
    } else {
      createMessage.warn('数据加载失败');
    }
    // 等待页面加载完成后关闭加载框
    nextTick(() => {
      setTimeout(() => {
        callBack && isFunction(callBack) && callBack();
      }, 1500);
    });
  }

  //   获取模块标题
  const getModuleName = computed(() => (moduleKey: string) => {
    if (allData.value[moduleKey]) {
      return allData.value[moduleKey].moduleName;
    } else {
      return '';
    }
  });
  //   获取每项标题
  function getName(moduleKey: string, index: number) {
    if (kvLists.value[moduleKey] && kvLists.value[moduleKey][index]) {
      return kvLists.value[moduleKey][index].name;
    }
    return '';
  }
  //   获取每项数据
  function getValue(moduleKey: string, index: number) {
    if (kvLists.value[moduleKey] && kvLists.value[moduleKey][index]) {
      return kvLists.value[moduleKey][index].value;
    }
    return '';
  }
  //   获取数据为列表的项
  function getArray(moduleKey: string, subInd: number, ind: number = 0) {
    if (kvLists.value[moduleKey]) {
      if (subInd) {
        subInd = kvLists.value.length;
      }
      return cloneDeep(kvLists.value[moduleKey]?.slice(ind, subInd));
    }
    return [];
  }
  return {
    getALlModuleData,
    kvLists,
    getModuleName,
    getValue,
    getArray,
    getName,
  };
});