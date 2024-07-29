import { ServicePrefixEnum } from '@/enums/comon';
import { RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';

export function getUserCurrentInfo(data: any) {
  return Axios({
    url: ServicePrefixEnum.OAUTH + '/CurrentUser',
    method: RequestEnum.POST,
    data,
  });
}
