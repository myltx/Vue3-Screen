import { ServicePrefixEnum } from '@/enums/comon';
import { RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';

export function getModule(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/cockpitDataModule/getModule',
    method: RequestEnum.POST,
    data,
  });
}

export function setModule(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/cockpitDataModule/setModule',
    method: RequestEnum.POST,
    data,
  });
}

export function getAllModule(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/cockpitDataModule/listModuleGroups',
    method: RequestEnum.POST,
    data,
  });
}

export function exportModuleRule(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/cockpitDataModule/exportRule',
    method: RequestEnum.POST,
    data,
  });
}
