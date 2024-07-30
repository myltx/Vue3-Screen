import { ServicePrefixEnum } from '@/enums/comon';
import { RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';

export function getUserCurrentInfo() {
  return Axios({
    url: ServicePrefixEnum.OAUTH + '/CurrentUser',
    method: RequestEnum.GET,
  });
}

export function login(data: any) {
  return Axios({
    url: ServicePrefixEnum.OAUTH + '/login',
    method: RequestEnum.POST,
    data,
  });
}
