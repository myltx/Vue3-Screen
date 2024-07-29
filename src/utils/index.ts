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

// /设置token
export function setToken(token: string) {
  localStorage.setItem('token', token);
}

// 获取token'
export function getToken(): string {
  return localStorage.getItem('token') || '';
}

// 获取用户信息
export function getUserInfo(): any {
  return JSON.parse(localStorage.getItem('userInfo') || '{}');
}

// 设置用户信息
export function setUserInfo(userInfo: any) {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

// 删除 缓存信息
export function removeLocalStorage(key?: string) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
}

// 获取 tenant
export function getTenant(): string {
  return localStorage.getItem('tenant') || '';
}
