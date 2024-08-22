import { ServicePrefixEnum } from '@/enums/comon';
import { RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';

export function getUserCurrentInfo() {
  return Promise.resolve({
    userInfo: {
      userId: '349057407209541',
      userAccount: 'admin',
      userName: '管理员',
      headIcon: '/api/file/Image/userAvatar/207.jpg',
      organizeId: '17BEBDCB-248D-4668-B6CD-BF22A446BBD4',
      organizeIdList: [
        '96240625-934F-490B-8AA6-0BC775B18468',
        '17BEBDCB-248D-4668-B6CD-BF22A446BBD4',
      ],
      organizeName: '海宁市/镇海康养院',
      positionIds: [],
      systemIds: [
        {
          id: '423160212987973',
          name: '业务平台',
          icon: 'icon-ym icon-ym-signature',
          currentSystem: false,
        },
        {
          id: '309228585019769285',
          name: '开发平台',
          icon: 'icon-ym icon-ym-signature',
          currentSystem: true,
        },
      ],
      positionId: '',
      positionName: '',
      prevLogin: 0,
      prevLoginTime: 1724145080000,
      prevLoginIPAddress: '127.0.0.1',
      prevLoginIPAddressName: '本地连接',
      portalId: '',
      appPortalId: '549973121055064389',
      roleIds: [],
      roleName: null,
      roleEncode: null,
      manager: null,
      mobilePhone: '18588888888',
      email: '323',
      birthday: null,
      departmentId: '17BEBDCB-248D-4668-B6CD-BF22A446BBD4',
      departmentName: '镇海康养院',
      isAdministrator: true,
      signImg: '',
      changePasswordDate: 1602731493000,
      systemId: '309228585019769285',
      appSystemId: null,
      groupIds: [],
      groupNames: [],
      workflowEnabled: 1,
    },
  });
  // return Axios({
  //   url: ServicePrefixEnum.OAUTH + '/CurrentUser',
  //   method: RequestEnum.GET,
  // });
}

export function login(data: any) {
  return Axios({
    url: ServicePrefixEnum.OAUTH + '/login',
    method: RequestEnum.POST,
    data,
  });
}
