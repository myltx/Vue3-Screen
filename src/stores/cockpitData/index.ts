import { useMessage } from '@/hooks/useMessage';
import { isFunction, isObject } from '@/utils/is';
import { getModule } from '@/api/cockpit/cockpit';
import { cloneDeep } from 'lodash-es';
import { LocationQueryValue } from 'vue-router';
import { useSettingStore } from '@/stores/index';

const { createMessage } = useMessage();
export const useCockpitDataStore = defineStore('cockpitData', () => {
  const settingStore = useSettingStore();
  const { indexConfig } = storeToRefs(settingStore);
  const intervalUpdateData = computed(() => {
    return indexConfig.value.intervalUpdateData;
  });
  // 根据配置的 moduleKey 在页面动态获取数据
  const promiseList: Promise<any>[] = [];
  const kvLists = ref<{ [key: string]: any }>({});
  const allData = ref<{ [key: string]: any }>({});
  //   异步根据页面所有模块配置获取数据
  async function getALlModuleData(
    moduleKeys: ModuleKeyType,
    callBack: Function,
    moduleParam?: string | number | LocationQueryValue | LocationQueryValue[],
  ) {
    kvLists.value = {};
    allData.value = {};
    if (isObject(moduleKeys)) {
      for (const key in moduleKeys) {
        const moduleList = moduleKeys[key].map((item: string) => {
          const regexPattern = /^([^-]+)/;
          const match: string[] = regexPattern.exec(item) || [];
          return match[1] || '';
        });
        moduleList.forEach((moduleKey: string) => {
          promiseList.push(
            getModule({
              pageKey: key,
              moduleKey: moduleKey,
              moduleParam,
            }),
          );
        });
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

  // 获取模块标题
  function getModuleName(moduleKey: string) {
    if (allData.value[moduleKey]) {
      return allData.value[moduleKey].moduleName.replace(/[\(（].*?[\)）]/g, '');
    } else {
      return '';
    }
  }
  // 获取模块子标题
  function getSubtModuleName(moduleKey: string) {
    if (allData.value[moduleKey]) {
      const regex = /（([^）]*)）|\(([^)]*)\)/;
      const match = allData.value[moduleKey].moduleName.match(regex);
      const contentInsideBrackets = match ? match[1] : '';
      return contentInsideBrackets;
    } else {
      return '';
    }
  }

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
  function getArray(moduleKey: string, subInd: number, ind = 0) {
    if (kvLists.value[moduleKey]) {
      if (subInd) {
        subInd = kvLists.value.length;
      }
      return cloneDeep(kvLists.value[moduleKey]?.slice(ind, subInd));
    }
    return [];
  }
  // 获取列表的表头数据
  function getRule(moduleKey: string, ind: number) {
    if (kvLists.value[moduleKey] && kvLists.value[moduleKey][ind]?.rule) {
      return JSON.parse(kvLists.value[moduleKey][ind]?.rule);
    }
    return [];
  }
  function interValGeyAllModuleData(
    moduleKeys: ModuleKeyType,
    callBack: Function,
    moduleParam?: string | number | LocationQueryValue | LocationQueryValue[],
  ) {
    getALlModuleData(moduleKeys, callBack, moduleParam);
    if (intervalUpdateData.value) {
      setInterval(
        () => {
          console.log(intervalUpdateData.value, 'intervalUpdateData');
          getALlModuleData(moduleKeys, callBack, moduleParam);
        },
        1000 * 60 * 5,
      );
    }
  }
  return {
    getALlModuleData,
    interValGeyAllModuleData,
    kvLists,
    getModuleName,
    getValue,
    getArray,
    getName,
    getSubtModuleName,
    getRule,
  };
});
