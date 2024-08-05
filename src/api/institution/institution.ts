import { ServicePrefixEnum } from '@/enums/comon';
import { RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';

export function detail(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/zhxf/h5/danger/reporting/detail',
    method: RequestEnum.POST,
    data,
  });
}

export function page(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/zhxf/h5/danger/reporting/page',
    method: RequestEnum.POST,
    data,
  });
}
