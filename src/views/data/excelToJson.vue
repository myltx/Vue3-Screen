<template>
  <div title="驾驶舱数据导入">
    <a
      href="http://ec-res.whenyoungcloud.cn/excelTemplate/%E9%A9%BE%E9%A9%B6%E8%88%B1%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%85%A5%E6%A8%A1%E7%89%88.xlsx"
    >
      模版下载
    </a>
    <a-button
      @click="handleImport"
      type="primary"
      success
      :disabled="Object.keys(nowJsonData).length || (value && !Object.keys(value).length)"
      class="mr-30px"
    >
      导入
    </a-button>
    <a-button
      @click="handleSubmit"
      type="primary"
      success
      :disabled="!Object.keys(nowJsonData).length"
      class="mr-30px"
    >
      提交
    </a-button>
    <a-space size="middle">
      <a-button @click="handleReset" type="primary" danger> 初始化 </a-button>
      <a-upload
        name="file"
        v-model:file-list="fileList"
        :multiple="false"
        :before-upload="handleFileUpload"
      >
        <a-button> 选择文件 </a-button>
      </a-upload>
    </a-space>
    <CodeEditor v-model:value="value" :mode="modeValue" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { CodeEditor, MODE } from '/@/components/CodeEditor';
  import { PageWrapper } from '/@/components/Page';
  import XLSX from 'xlsx';
  import { cloneDeep } from 'lodash-es';
  import { setModule } from '/@/api/ec/cockpit/ageStructure';
  import { useMessage } from '/@/hooks/web/useMessage';

  interface RuleType {
    key: string;
    title: string;
  }

  interface PageAndModuleObjectType {
    pageKey: string;
    pageName: string;
    moduleKey: string;
    moduleName: string;
    moduleParam: string;
    moduleType: string;
    kvList: KvListItemType[];
  }
  interface KvListItemType {
    key: string | number;
    name: string;
    dataType: string;
    value: string;
    valuePolicy: string;
    staticValue: string;
    dynamicValue: string | null;
    rule: string | null;
  }
  const normalDataType = ['number', 'string', 'boolean', 'object'];
  const fileList = ref([]);
  const modeValue = ref<MODE>(MODE.JSON);
  const value = ref<any>('');
  const nowJsonData = ref<any>({});
  const { createMessage } = useMessage();
  // 提交导入excel数据
  function handleSubmit() {
    const allPromise: any = [];

    for (const key in nowJsonData.value) {
      allPromise.push(setModule(nowJsonData.value[key]));
    }
    Promise.all(allPromise).then((res) => {
      if (res) {
        createMessage.success('修改成功');
        handleReset();
      }
    });
  }
  // 提交粘贴到代码编辑器的数据
  function handleImport() {
    const allPromise: any = [];
    value.value;
    const data = JSON.parse(value.value)?.data;
    data.forEach((item) => {
      allPromise.push(setModule(item));
    });
    Promise.all(allPromise).then((res) => {
      if (res) {
        createMessage.success('导入成功');
        handleReset();
      }
    });
  }
  // 初始化页面数据
  function handleReset() {
    value.value = '';
    nowJsonData.value = {};
    fileList.value = [];
  }
  // 上传后文件处理 主要的数据转换逻辑
  async function handleFileUpload(file) {
    try {
      const jsonData: any = await readExcel(file);
      jsonData.forEach((sheet) => {
        const sheetData = sheet.data.filter((item) => item.length);
        const regex = /sub[^-]*$/;
        const isSubstringIncluded = regex.test(sheet.sheetName);
        if (isSubstringIncluded) {
          sheet.sheetName = sheet.sheetName.replace(/-[^-]*$/, '');
        }
        // 这里获取表头数据
        const headerData = sheetData[0].map((item) => {
          const regex = /^(.*)(&&)/;
          return item.replace(regex, '');
        });
        // 这里拦截掉错误配置的数据
        if (!configIsCorrect(headerData)) {
          value.value = {
            code: 0,
            errorMessage: 'excel 配置参数错误，请检查文件后重新上传',
          };
          throw 'excel 配置参数错误，请检查文件后重新上传';
        }
        // 这里获取到 pageKey 以及 moduleKey
        const lastArr = cloneDeep(headerData).slice(-2);
        // 这里获取到的是动态数据列的表头 判断是不是需要添加动态接口
        // 这里是获取动态接口的参数
        const dynamicValue: string | null = getHeaderTitleValue(headerData, 3);
        // 这里获取的是 moduleType 用来控制 是不是需要传入参数
        const moduleTypeValue: string | null = getHeaderTitleValue(headerData, 4);
        // 这里获取页面要设置的数据类型
        // 这里获取到的是表格数据需要设置的数据类型 默认设置列表,normal 为普通结构数据 (string、number等)
        // 不能这么设置了 类型是什么就是什么类型
        const dataType = getHeaderTitleValue(headerData, 5);
        let nowArr = [];
        let nowSubArr = [];
        //这里处理复杂数据
        nowArr = lastArr[0].split('-');
        nowSubArr = lastArr[1].split('-');
        const nowKey = `${nowArr[1]}-${nowSubArr[1]}`;
        const ruleList = cloneDeep(headerData)
          .splice(0, headerData.length - 5)
          .filter((item) => item);
        if (!dataType || !normalDataType.includes(dataType)) {
          let rule: RuleType[] = [];
          ruleList.forEach((title, i) => {
            if (title.indexOf('-') !== -1) {
              const t = title.split('-')[0];
              const k = title.split('-')[1];
              rule.push({
                key: k,
                title: t,
              });
            } else {
              rule.push({
                key: `field${i}`,
                title,
              });
            }
          });
          rule.unshift({
            key: 'id',
            title: 'id',
          });
          if (!JSON.stringify(nowJsonData.value[nowKey])) {
            nowJsonData.value[nowKey] = generatePageObject(lastArr, sheet, {
              rule,
              moduleType: moduleTypeValue,
            });
          }
          // 用于存放数据的数组
          let data = [];
          // 到这里就是规则处理完成了,   然后开始处理数据
          sheetData.forEach((content, ind) => {
            if (ind > 0 && lastArr[0].indexOf('pageKey') != -1) {
              // 这里可以需要循环 content  然后逐个对应 rule 的值生成数据数组
              let obj = {};
              rule.forEach((r, i) => {
                if (i > 0) {
                  obj[r.key] = content[i - 1];
                } else {
                  obj[r.key] = ind;
                }
              });
              data.push(obj);
            }
          });
          // 这里将数据添加到对应位置
          nowJsonData.value[nowKey].kvList = [
            ...nowJsonData.value[nowKey].kvList,
            ...[
              {
                key: '0',
                name: getLastValueAfterDash(sheet.sheetName),
                dataType,
                value: [],
                valuePolicy: 'static',
                rule: JSON.stringify(rule),
                dynamicValue,
                staticValue: data,
              },
            ],
          ];
          delete nowJsonData.value[nowKey].rule;
        } else {
          // 这里处理简单的数据
          // 这里根据 pageKey  以及 moduleKey 先去生成最外层的对象数据
          if (!JSON.stringify(nowJsonData.value[nowKey])) {
            nowJsonData.value[nowKey] = generatePageObject(lastArr, sheet, {
              moduleType: moduleTypeValue,
            });
          }
          const normalArr: KvListItemType[] = [];
          // 这里因为重构了导出的结构 而且为了每个值都可以动态配置 所以调整整个的数据处理逻辑
          sheetData.forEach((sheetItem, sheetInd) => {
            if (sheetInd == 0) {
              return;
            }
            const obj: KvListItemType = {
              key: sheetInd,
              name: sheetItem[0] || '未知',
              dataType,
              staticValue: sheetItem[1] || '',
              value: '',
              valuePolicy: 'static',
              dynamicValue: sheetItem[4],
              rule: null,
            };
            normalArr.push(obj);
          });
          nowJsonData.value[nowKey].kvList = [...nowJsonData.value[nowKey].kvList, ...normalArr];
        }
      });
      value.value = nowJsonData.value;
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
    return false; // 阻止默认的文件上传行为
  }

  // 生成 page 以及 module 的数据
  function generatePageObject(
    pageAndModuleArray: string[],
    sheet,
    ohters = {},
  ): PageAndModuleObjectType {
    const pageKey = pageAndModuleArray[0]?.split('-')[1];
    const moduleKey = pageAndModuleArray[1]?.split('-')[1];
    const result: PageAndModuleObjectType = {
      pageKey,
      pageName: sheet.sheetName.replace(/-[^-]*$/, ''),
      moduleKey,
      moduleName: getLastValueAfterDash(sheet.sheetName),
      moduleParam: '',
      moduleType: '',
      kvList: [],
    };
    return Object.assign(result, ohters);
  }
  // 读取文件
  function readExcel(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const jsonData = [];
        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          jsonData.push({ sheetName, data: sheetData });
        });
        resolve(jsonData);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsArrayBuffer(file);
    });
  }
  // 这里获取到表头数据
  function getHeaderTitleValue(headerData: string[], ind: number): string | null {
    const keyMap = {
      3: 'dynamicValue-',
      4: 'moduleType-',
      5: 'excelDataType-',
    };
    const headerTitle = headerData[headerData.length - ind];
    if (!headerTitle) {
      return '';
    }
    if (headerTitle.indexOf(keyMap[ind]) != -1) {
      return headerTitle.split('-').length > 1 ? headerTitle.split('-')[1] : null;
    } else {
      return '';
    }
  }
  // 生成 name
  function getLastValueAfterDash(str: string): string {
    const lastIndex = str.lastIndexOf('-');
    if (lastIndex !== -1) {
      return str.slice(lastIndex + 1).trim();
    }
    return '未知';
  }
  // 判断生成数据需要的规则是不是在 Excel 中
  function configIsCorrect(headerData: string[]): boolean {
    const allConfig = cloneDeep(headerData)
      .slice(-5)
      .map((item) => item.split('-')[0] + '-');
    const config = ['excelDataType-', 'dynamicValue-', 'pageKey-', 'moduleKey-', 'moduleType-'];
    if (allConfig.length < config.length) {
      return false;
    }
    const flag = allConfig.every((item) => config.includes(item));
    return flag;
  }
</script>
<style scoped>
  ::v-deep .ant-upload-list {
    display: none;
  }
</style>
