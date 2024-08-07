import { defineAsyncComponent } from 'vue';

const asyncComponents: Record<string, any> = {};

const components = import.meta.glob('./*.vue');
for (const path in components) {
  const match = path.match(/\.\/(.*?)\.vue$/);
  const componentName = match ? match[1] : '';
  asyncComponents[componentName] = defineAsyncComponent(() => import(`./${path.slice(2)}`));
}

export const { Left, Right, Bottom, Main } = asyncComponents;
