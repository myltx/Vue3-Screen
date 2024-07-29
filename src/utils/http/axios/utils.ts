import { removeLocalStorage } from '@/utils';
import { TIMEOUT, OTHER, NOLOGIN } from './error-code';
import { useMessage } from '@/hooks/useMessage';
// import { LOGIN_OUT_PATH } from '@/helpers';

const LOGIN_OUT_PATH = '';

const { createConfirm, createMessage } = useMessage();

// 成功处理函数
export function handleSuccess(res: any, resolve: Function, opts?: any) {
  console.log(opts, 'opts');
  const data = res.data;
  // console.log(data);
  if (data.isSuccess == false) {
    // 未登录
    if (NOLOGIN.includes(data.code)) {
      createConfirm({
        iconType: 'warning',
        content: data.msg || data.message,
        title: '',
        onOk() {
          removeLocalStorage();
          window.location.hash = LOGIN_OUT_PATH;
        },
      });
    } else {
      const msg = data.msg || data.message;
      if (msg.includes('[]未匹配地址')) {
        createMessage.warn('非嘉善县户籍');
      } else {
        createMessage.warn(msg);
      }
    }
  }
  resolve(data);
}

// 失败处理函数
export function handleError(error: any, reject: Function, opts?: any) {
  console.log(opts, 'opts');
  console.log(error, 'error');
  console.log(error.response);
  if (error.code == TIMEOUT) {
    createMessage.error('请求超时');
  } else if (error.response && error.response.data) {
    if (error.response.status === 500) {
      createMessage.error(error.response.data);
    }
    if (NOLOGIN.includes(error.response.data.code)) {
      createConfirm({
        iconType: 'warning',
        content: error.response.data.errorMsg || error.response.data.msg,
        title: '',
        onOk() {
          removeLocalStorage();
          window.location.hash = LOGIN_OUT_PATH;
        },
      });
    } else {
      const resData = error.response.data;

      if (OTHER.includes(resData.code)) {
        createConfirm({
          iconType: 'warning',
          content: resData.msg || resData.message,
          title: '',
          onOk() {
            removeLocalStorage();
            window.location.hash = LOGIN_OUT_PATH;
          },
        });
      } else if (resData.msg) {
        createMessage.error(resData.msg);
      } else if (resData.message) {
        createMessage.error(resData.message);

        window.location.hash = LOGIN_OUT_PATH;
      }
    }
  } else if (error.message || error.msg) {
    createMessage.error(error.message || error.msg);
  }
  reject(error);
}
