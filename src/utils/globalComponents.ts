import { App, Component } from "vue";
import ScaleScreen from "@/components/scale-screen";

interface ComponentList {
  [key: string]: Component;
}

const componentList: ComponentList = {
  "scale-screen": ScaleScreen,
};

export function registerGlobalComponents(app: App) {
  for (const key in componentList) {
    app.component(key, componentList[key]);
  }
}
