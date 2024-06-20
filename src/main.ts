import { createApp, App } from "vue";
import { createPinia } from "pinia";

import { registerGlobalComponents } from "./utils/globalComponents";

import AppComponent from "./App.vue";
import router from "./router";

// 样式重置
import "@unocss/reset/normalize.css";
import "@unocss/reset/tailwind-compat.css";
// 引入 unocss
import "virtual:uno.css";

import 'ant-design-vue/dist/reset.css';

import { registerEcharts } from "@/plugins/echarts";
//不使用mock 请注释掉
import { mockXHR } from "@/mock/index";
mockXHR();

const app: App = createApp(AppComponent);
registerEcharts(app);
app.use(createPinia());
app.use(router);
// 这里注册全局组件
registerGlobalComponents(app);

app.mount("#app");
