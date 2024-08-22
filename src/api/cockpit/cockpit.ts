import { ServicePrefixEnum } from '@/enums/comon';
import { ContentTypeEnum, RequestEnum } from '@/enums/httpEnum';
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

export function getYuanList(data: any) {
  return Axios({
    url: ServicePrefixEnum.SERVICE + '/visualdev/OnlineDev/550662278131745157/List',
    method: RequestEnum.POST,
    data,
  });
}

export function getPwixunList(data: any) {
  return Axios({
    url: ServicePrefixEnum.SERVICE + '/visualdev/OnlineDev/550674121361457541/List',
    method: RequestEnum.POST,
    data,
  });
}

export function getFireDrillList(data: any) {
  return Axios({
    url: ServicePrefixEnum.COCKPIT + '/cockpitDynamicData/getFireDrillList',
    method: RequestEnum.POST,
    meta: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    data,
  });
}

// 获取视频列表
export function getVideoDeviceList(data: { orgId?: string | number }) {
  return Promise.resolve([
    {
      id: '33000000001320000030',
      iotName: '人员离岗监测',
      menuType: 'ryzlgjc',
      iotProductId: 'DH-HY-FC443TLDD-AS',
      status: 2,
      onlineStatus: null,
      syncTime: '2024-07-01 09:40:25',
      proUpdateTime: '2024-08-07 15:29:32',
      organizeId: '560356386806981637',
      deviceProperties: null,
      properties: {},
      placeId: '568708846814494789',
      placeIdList: null,
      placeName: null,
      warnCount: 0,
      maintenanceCount: 0,
      snapPicUrl:
        'http://test.zhxf.iot.whenyoungcloud.cn/upload/snap/33000000001320000030/33000000001320000031.jpeg',
      deviceId: '33000000001320000030',
    },
    {
      id: '33000000001320000040',
      iotName: '消防通道监测',
      menuType: 'xftdzyjc',
      iotProductId: 'DH-HY-FC443TF-AS',
      status: 2,
      onlineStatus: null,
      syncTime: '2024-07-01 09:39:26',
      proUpdateTime: '2024-08-14 10:38:39',
      organizeId: '560356386806981637',
      deviceProperties: null,
      properties: {},
      placeId: '572402533759192581',
      placeIdList: null,
      placeName: null,
      warnCount: 0,
      maintenanceCount: 0,
      snapPicUrl: null,
      deviceId: '33000000001320000040',
    },
    {
      id: '33000000001320000020',
      iotName: '火灾预警监测',
      menuType: 'hzznyj',
      iotProductId: 'DH-HY-SAV849HA',
      status: 2,
      onlineStatus: null,
      syncTime: '2024-07-01 09:39:36',
      proUpdateTime: '2024-08-07 15:29:09',
      organizeId: '560356386806981637',
      deviceProperties: null,
      properties: {},
      placeId: '560803147149241285',
      placeIdList: null,
      placeName: null,
      warnCount: 0,
      maintenanceCount: 0,
      snapPicUrl:
        'http://test.zhxf.iot.whenyoungcloud.cn/upload/snap/33000000001320000020/33000000001320000021.jpeg',
      deviceId: '33000000001320000020',
    },
  ]);
  return Axios({
    url: ServicePrefixEnum.SERVICE + '/cockpitDynamicData/getVideoDeviceList',
    method: RequestEnum.POST,
    meta: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    data,
  });
}

// 获取视频播放地址
export function getVideoUrl(id: string | number) {
  return Axios({
    url: ServicePrefixEnum.SERVICE + '/iotMaster/getVideoUrl?deviceId=' + id,
    method: RequestEnum.GET,
  });
}

// 停止视频播放
export function stopVideo(id: string | number, channelId: string | number) {
  return Axios({
    url:
      ServicePrefixEnum.SERVICE + '/iotMaster/stopVideo?deviceId=' + id + '&channelId=' + channelId,
    method: RequestEnum.GET,
  });
}
