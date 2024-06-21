import dayjs from 'dayjs';

export * from './storage';

/**
 * 获取不同格式时间
 * @param type
 * @param date
 * @returns date
 */
type DateType = 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss' | 'HH:mm:ss';
export const getDate = (type?: DateType) => {
  const format: DateType = type || 'YYYY-MM-DD';
  return dayjs().format(format);
};

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};
