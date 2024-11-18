## 项目描述

Vue3 + vite 版本驾驶舱

参考[代码地址](https://github.com/daidaibg/IofTV-Screen-Vue3/tree/master)

- master

## 界面预览

![alt text](image.png)

## 分支说明

- threejs
  - 包含threejs相关代码

#### 样式

- 项目需要全屏展示（按 F11）。

- 项目部分区域使用了全局注册方式，增加了打包体积，在实际运用中请使用 **按需引入**。

- 项目环境：Vite、Echarts、Npm、Node，axios,mock,vue3。

- 在项目public目录下存放地图数据合集，根据地市编存放。

使用到的技术栈：

1. [Vue 官方文档](https://cn.vuejs.org/)
2. [echarts 实例](https://gitee.com/link?target=https%3A%2F%2Fecharts.apache.org%2Fexamples%2Fzh%2Findex.html)，[echarts API 文档](https://gitee.com/link?target=https%3A%2F%2Fecharts.apache.org%2Fzh%2Fapi.html%23echarts)
3. [mock.js官网](http://mockjs.com/examples.html)
4. [axios官网](https://axios-http.com/)
5. [unocss](https://unocss.dev/)
6. [unocss语法](https://unocss.dev/interactive/)
7. [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
8. [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
9. [vue3-baidu-map-gl](https://yue1123.github.io/vue3-baidu-map-gl/)
10. [nprogress](https://ricostacruz.com/nprogress/)
11. [@vueuse/motion](https://motion.vueuse.org/getting-started/introduction)
12. [vue3-seamless-scroll](https://motion.vueuse.org/getting-started/introduction)

## 采用自适应组件方式

## 2、主要文件介绍

| 文件              | 作用/功能                                                             |
| ----------------- | --------------------------------------------------------------------- |
| main.js           | 主目录文件，引入 Echart/DataV 等文件                                  |
| utils             | 工具函数与 mixins 函数等                                              |
| views/ home.vue   | 项目主结构                                                            |
| views/其余文件    | 界面各个区域组件（按照位置来命名）                                    |
| assets            | 静态资源目录，放置 logo 与背景图片                                    |
| assets / css/     | 通用 CSS 文件，全局项目快捷样式调节                                   |
| components/echart | 所有 echart 图表（按照位置来命名）                                    |
| common/...        | 全局封装的 ECharts 和 flexible 插件代码（适配屏幕尺寸，可定制化修改） |
| api/api.js        | 接口封装文件                                                          |
| mock              | 模拟数据接口地址                                                      |

## 使用介绍

### 环境

- node version >= 20

### 安装

```npm
pnpm install
```

### 启动

```npm
pnpm dev
```

### 取消mock模拟数据

```javascript
// src\main.ts文件
// 把下面两行代码注释掉就可以了。
import { mockXHR } from '@/mock/index';
mockXHR();
```

## 公用组件

封装了除面条外个别用到的组件

### 自适应缩放组件

#### 注意

采用Scale方式，会自动给组件父元素添加overflow:hidden

#### 使用

```vue
<template>
  <scale-screen width="1920" height="1080">
    <div> content </div>
  </scale-screen>
</template>

<script>
  import ScaleScreen from 'scale-screen';

  export default {
    name: 'Demo',
    components: {
      VScaleScreen,
    },
  };
</script>
```

#### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selfAdaption | 是否进行自适应 | Boolean | true |
| width | 大屏宽度 | `Number` or `String` | 1920 |
| height | 大屏高度 | `Number` or `String` | 1080 |
| autoScale | 自适应配置，配置为boolean类型时，为启动或者关闭自适应，配置为对象时，若x为true，x轴产生边距，y为true时，y轴产生边距，启用fullScreen时此配置失效 | Boolean or {x:boolean,y:boolean} | true |
| delay | 窗口变化防抖延迟时间 | Number | 500 |
| fullScreen | 全屏自适应，启用此配置项时会存在拉伸效果，同时autoScale失效，非必要情况下不建议开启 | Boolean | false |
| boxStyle | 修改容器样式，如居中展示时侧边背景色，符合Vue双向绑定style标准格式 | Object | null |
| wrapperStyle | 修改自适应区域样式，符合Vue双向绑定style标准格式 | Object | null |

### 外边框

因为我的项目外边框几乎一样，还有title,所以封装了此组件。

根据自己需求更改，更换外边框（src\components\item-wrap\item-wrap.vue）下更换。

```vue
<ItemWrap title="我是title">
       <div>我是谁？</div>
</ItemWrap>
```

| 参数  | 描述 | 默认值 |  类型  | 可选值 |
| :---: | :--: | :----: | :----: | :----: |
| title | 标头 |   -    | string |   -    |

### CountUp 数字滚动

以下属性同 coutup.js 配置项（same as countup.js properties）

#### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| endVal | Number \| String | - | 结束值 |
| startVal | Number \| String | 0 | 起始值 |
| duration | Number | 2.5 | 动画时长，单位：秒 |
| options | Object | - | [countUp.js](https://github.com/inorganik/countUp.js) options 配置项 |

以下为组件特有属性（extension properties）

| Name     | Type              | Default | Description                   |
| -------- | ----------------- | ------- | ----------------------------- |
| autoplay | Boolean           | true    | 是否自动计数                  |
| loop     | Boolean \| Number | false   | 循环次数，有限次数 / 无限循环 |
| delay    | Number            | 0       | loop 循环的间隔时间，单位：秒 |

#### 插槽（slots）

| Name   | Description |
| ------ | ----------- |
| prefix | 前缀        |
| suffix | 后缀        |

#### 事件（Events）

| Name      | Description                | return       |
| --------- | -------------------------- | ------------ |
| @init     | CountUp 实例初始化完成触发 | CountUp 实例 |
| @finished | 计数结束时触发             | -            |

#### countup.js 配置项说明

```ts
interface CountUpOptions {
  startVal?: number; // number to start at (0) 开始数值，默认 0
  decimalPlaces?: number; // number of decimal places (0) 小数点 位数
  duration?: number; // animation duration in seconds (2) 动画时长
  useGrouping?: boolean; // example: 1,000 vs 1000 (true) 是否使用千分位
  useEasing?: boolean; // ease animation (true) 是否开启动画过渡，默认动画函数为easeOutExpo
  smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number; // amount to be eased for numbers above threshold (333)
  separator?: string; // grouping separator (',') 千分位分隔符
  decimal?: string; // decimal ('.') 小数点分隔符
  // easingFn: easing function for animation (easeOutExpo) 动画函数
  easingFn?: (t: number, b: number, c: number, d: number) => number;
  formattingFn?: (n: number) => string; // this function formats result 格式化结果
  prefix?: string; // text prepended to result 数值前缀
  suffix?: string; // text appended to result 数值后缀
  numerals?: string[]; // numeral glyph substitution 数字符号替换 0 - 9，例如替换为 [a,b,c,d,e,f,g,h,i,j]
  enableScrollSpy?: boolean; // start animation when target is in view 在可视范围内才开始动画
  scrollSpyDelay?: number; // delay (ms) after target comes into view  目标进入可视范围内后的延迟时间(毫秒)
}
```

### 胶囊柱图

#### Props

|  属性  |   说明   |      类型       |          可选值           | 默认值  |
| :----: | :------: | :-------------: | :-----------------------: | :-----: |
|  data  |  柱数据  | `Array<Object>` |   [data属性](#data属性)   |  `[]`   |
| config | 基础配置 |     Object      | [config属性](#config属性) | `false` |

#### config属性

|   属性    |   说明   |      类型       | 可选值 | 默认值  |
| :-------: | :------: | :-------------: | :----: | :-----: |
|   unit    |   单位   |    `String`     |  ---   |  `''`   |
|  colors   |  环颜色  | `Array<String>` |  [1]   |   [2]   |
| showValue | 显示数值 |    `Boolean`    |  ---   | `false` |

#### 注释config注释

[1] 颜色支持`hex|rgb|rgba|颜色关键字`等四种类型。

[2] 默认配色为`['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']`。

#### data属性

| 属性  |   说明   |   类型   | 可选值 | 默认值 |
| :---: | :------: | :------: | :----: | :----: |
| name  |  柱名称  | `String` |  ---   |  ---   |
| value | 柱对应值 | `Number` |  ---   |  ---   |

### 无缝轮播组件

[看此文档 优化此源码](https://doc.wssio.com/opensource/vue3-seamless-scroll/)

## 中间地图

```vue
<Map />
```

### [echarts](src/plugins/echarts.ts)配置文件

- 如果需要添加组件在此文件导入即可
- 组件使用

```vue
<v-chart class="chart" id="bar-chart" :option="option" v-if="Object.keys(option).length" />
```

### AutoScrollTable 滚动列表组件

基于 [vue3-seamless-scroll](https://github.com/xfy520/vue3-seamless-scroll)

#### 代码演示

```vue
<AutoScrollTable
  :headers="[
    {
      key: 'content',
      title: '内容',
      style: {},
    },
    {
      key: 'date',
      title: '时间',
      style: {},
    },
  ]"
  :rows="alarmList"
  :class-options="{
    step: 0.5,
  }"
></AutoScrollTable>
```

#### Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :----: | :------: | :-------------: | :-----------------------: | :-----: |
| headers | 表头数组 | [Headers](#Headers) | --- | --- |
| rows | 表格内容数组 | { [key: string]: string }[] | --- | --- |
| scrollAuto | 是否开启滚动 | Boolean | true/false | true |
| height | 表格高度 | string | number | --- | 100% |
| classOptions | vue3-seamless-scroll配置 | Object | [vue3-seamless-scroll组件配置](https://github.com/xfy520/vue3-seamless-scroll?tab=readme-ov-file#%E7%BB%84%E4%BB%B6%E9%85%8D%E7%BD%AE) | {limitMoveNum: 6,direction: 1, hoverStop: true,step: 1,} |

#### Type

##### Headers

```typescript
{
  key: string;
  style: Object;
  title: string;
}
```

## 全局参数

### filter

监测数据项统一过滤，保留两位小数。

```vue
{{ 10.23123 | montionFilter }}
```

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 需要开发功能

- [x] 接口请求（数据逻辑）
  - [x] 异常处理
- [x] 公共异常确认框
- [x] pageWrapper
- [x] 带标题的 BasicBox
- [x] loading
- [x] 自动登录的中间页
- [x] 公共弹框
- [x] map components
  - [x] 点位渲染
  - [x] 中心点切换
  - [x] marker 点击事件
  - [x] 自定义 marker icon
- [x] 获取动态数据然后转换为页面需要格式（使用 store ）
- [x] 3D图表
- [x] 柱状图、折线图
- [x] AutoScrollTable 滚动列表组件
