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

export function page(data: any,orgId:any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + `/cockpitDynamicData/getDangerList?orgId=${orgId}`,
    method: RequestEnum.POST,
    data,
  });
}

export function getAlarmList(data: any,orgId:any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + `/cockpitDynamicData/getAlarmList?orgId=${orgId}`,
    method: RequestEnum.POST,
    data,
  });
}

export function alarmSingle(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/iotAlarm/alarmSingle',
    method: RequestEnum.POST,
    data,
  });
}

export function getDictionaryTypeSelector(typeId: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + `/system/DictionaryData/${typeId}/Data/Selector`,
    method: RequestEnum.GET,
  });
}
