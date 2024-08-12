import axios from 'axios';
import { getTenant, getToken } from '@/utils';
import { handleError, handleSuccess } from './utils';
import qs from 'qs';

axios.defaults.timeout = 70000; // 默认超时时间

axios.defaults.headers.post['Content-Type'] = 'application/json';

// 接口请求处理
axios.interceptors.request.use((config: any) => {
  const isToken = config.headers['X-token'] === false ? config.headers['x-isToken'] : true;
  const token = getToken();
  if (token && isToken) {
    config.headers.Authorization = `bearer ${token}`;
  }

  const { VITE_GLOB_MULTI_TENANT_TYPE: multiTenantType } = import.meta.env;
  // 增加租户编码
  if ((config as any)?.requestOptions?.withTenanNotifyt !== false && multiTenantType !== 'NONE') {
    (config as any).headers.tenant = getTenant();
  }
  return config;
});

// 接口返回处理
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

const httpServer = (config: any) => {
  // 公共参数
  const publicParams = {
    ts: Date.now(),
  };
  //   http 默认配置
  const method = config?.method.toUpperCase();
  let baseURL = '';
  if (import.meta.env.DEV) {
    baseURL = import.meta.env.VITE_GLOB_API_URL + import.meta.env.VITE_GLOB_API_URL_PREFIX;
  } else {
    baseURL = `${window.location.origin}${import.meta.env.VITE_GLOB_API_URL_PREFIX}`;
  }
  const httpDefaultOpts: any = {
    method,
    baseURL,
    url: config.url,
    responseType: config.responseType || '',
    timeout: (config.custom && config.custom['timeout']) || 30000,
  };
  if (config['meta']) {
    httpDefaultOpts.headers = config['meta'];
  }

  const dataRequest = ['PUT', 'GET', 'POST', 'PATCH'];
  if (dataRequest.includes(method)) {
    if (config.params) {
      httpDefaultOpts.params = config.params || {};
    } else {
      httpDefaultOpts.data = config.data || {};
    }
  } else {
    httpDefaultOpts.params = {
      ...publicParams,
      ...(config.data || {}),
    };
  }
  if (
    httpDefaultOpts.headers &&
    httpDefaultOpts.headers['content-type'] &&
    httpDefaultOpts.headers['content-type'] == 'application/x-www-form-urlencoded'
  ) {
    httpDefaultOpts.data = qs.stringify(httpDefaultOpts.data);
  }

  // formData 转换
  if (config.formData) {
    httpDefaultOpts.transformRequest = [
      (data: any) => {
        const formData = new FormData();
        if (data) {
          Object.entries(data).forEach((item: any) => {
            formData.append(item[0], item[1]);
          });
        }
        return formData;
      },
    ];
  }

  // 创建实例
  return new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then((response) => {
        handleSuccess(response, resolve, config);
      })
      .catch((error) => {
        handleError(error, reject, config);
      });
  });
};

export default httpServer;
