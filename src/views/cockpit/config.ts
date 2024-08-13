import { graphic } from 'echarts/core';

const data0 = [1, 1, 1, 1, 1, 1, 1];

export function getEquipmentOption(xData: string[] | number[], yData: string[] | number[]) {
  return {
    //   backgroundColor: '#000E1A', //背景色
    tooltip: {
      // trigger: 'axis',
      borderColor: 'rgba(255,255,255,.3)',
      backgroundColor: 'rgba(13,5,30,.6)',
      textStyle: {
        color: 'white', //设置文字颜色
      },
      borderWidth: 1,
      padding: 5,
      formatter: function (params: any) {
        console.log(params, 'params');
        const { name, value, marker } = params;
        const regex = /background-color:\s*#[0-9a-fA-F]{6}/;
        const replacedStr = marker.replace(regex, `background-color: #00fafd`);
        return `${replacedStr}${name}: ${value}`;
      },
    },
    textStyle: {
      color: '#C9C9C9',
    },

    // color: ['#fbc292', '#06fbfe', '#f06e91'],
    legend: {
      show: false,
      type: 'scroll',
      orient: 'vertical',
      selectedMode: false, //图例点击失效
      right: '10%',
      top: '15%',
      textStyle: {
        color: '#ffffff',
        fontSize: 14,
      },

      // data: datas.legendData,
    },
    grid: {
      containLabel: true,
      left: '0',
      top: '22%',
      bottom: '10%',
      right: '0',
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#B5B5B5',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255, 255, 255, 0.45)',
        },
        fontSize: 12,
      },
    },
    yAxis: [
      {
        type: 'value',
        name: '',
        nameTextStyle: {
          padding: [200, 0, 0, 600], // 四个数字分别为上右下左与原位置距离
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#B5B5B5',
          },
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(255, 255, 255, 0.45)',
          },
          fontSize: 10,
        },
      },
    ],
    series: [
      {
        type: 'bar',
        name: '器材',
        data: yData,
        stack: 'zs',
        barMaxWidth: 'auto',
        barWidth: 20,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: '#017ebb',
              },
              {
                offset: 1,
                color: '#06fbfe',
              },
            ],
          },
        },
      },
      {
        name: '折线',
        type: 'line',
        data: yData,
        smooth: true,
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(5, 186, 203, 0)',
                },
                {
                  offset: 0.5,
                  color: 'rgba(5, 186, 203, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(5, 186, 203, 0)',
                },
              ]),
              shadowColor: 'rgba(255, 120, 0,1)',
              shadowBlur: 8,
            },
            areaStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(197, 106, 255, 0)',
                },
                {
                  offset: 0.6,
                  color: 'rgba(255, 120, 0, 0)',
                },
              ]),
            },
          },
        },
      },

      {
        data: data0,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [20, 10],
        zlevel: 2,
        itemStyle: {
          normal: {
            color: '#06fbfe',
          },
        },
      },
      {
        data: yData,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [0, 20],
        zlevel: 2,
      },
      {
        data: yData,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [20, 10],
        zlevel: 2,
        itemStyle: {
          normal: {
            color: '#06fbfe',
          },
        },
      },
    ],
  };
}

export const moduleKeys: ModuleKeyType = {
  homePage: [
    'safetySystem-消防安全制度建设',
    'fireAwarenessEquipment-消防设施设备（消防感知设备）',
    'fireFightingEquipment-消防设施设备（消防器材）',
    'fireAwarenessEquipmentType-设备类型统计（消防感知设备）',
    'fireFightingEquipmentType-设备类型统计（消防器材）',
    'realTimeVideo-实时视频联动',
    'clockIn-值班打卡',
    'fireDrillAndTraining-消防演练与培训',
    'fireWarningAnalysis-消防预警分析',
    'safetyHazardRectification-安全隐患整改',
    'fireSafetynspection-消防安全检查',
    'keepWatch-巡更(消防安全检查）',
    'inspection-巡检(消防安全检查）',
    'topCenter-顶部中间',
    'map-地图',
    'toBeUploadedOrg-待上传机构（消防安全制度建设弹框）',
    'unsolvedHiddenDanger-未解决隐患（安全隐患整改弹框）',
    'noTrainingInstitutionsWereOrg-近半年未组织培训机构（消防演练弹框）',
    'needToBeImprovedOrg-待完善机构（消防安全制度建设弹框）',
    'punchedMechanismsOrg-已打卡机构数（值班打卡弹框）',
    'nearlyThreeDaysOrg-近3日未巡更机构（消防安全检查弹框）',
    'haveAlreadyOrg-已上传机构（消防安全制度建设弹框）',
    'nearlyOneMonthsOrg-近一月未巡更机构（消防安全检查弹框）',
    'dutyHasBeenCompleted-已完成值班人次（值班打卡弹框）',
    'totalHiddenDangerRectification-累计发现隐患（安全隐患整改弹框）',
  ],
  orgPage: [
    'fireSafetySystem-消防安全制度建设',
    'fireFightingFacilitiesAndEquipment-消防设施设备',
    'fireSafetyInspection-消防安全检',
  ],
};

export interface modalType {
  [key: string]: {
    module: string;
    title: string;
    key: string;
    index?: number;
    columns: any[];
  };
}
const orgColumns = [
  {
    title: '机构',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
  },
  {
    title: '安全责任人',
    dataIndex: 'userName',
    key: 'userName',
    ellipsis: true,
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
    ellipsis: true,
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address',
    ellipsis: true,
  },
];

const clockColumns = [
  {
    title: '机构',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
  },
  {
    title: '班次',
    dataIndex: 'classes',
    key: 'classes',
    ellipsis: true,
    width: 80,
  },
  {
    title: '值班人员',
    dataIndex: 'userName',
    key: 'userName',
    width: 120,
    ellipsis: true,
  },
  {
    title: '打卡时间',
    key: 'clockTime',
    dataIndex: 'clockTime',
    ellipsis: true,
  },
];
const hiddenDangerColumns = [
  {
    title: '机构',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
  },
  {
    title: '隐患描述',
    dataIndex: 'remark',
    key: 'remark',
    ellipsis: true,
  },
  {
    title: '上报时间',
    dataIndex: 'createTime',
    key: 'createTime',
    ellipsis: true,
  },
  {
    title: '整改状态',
    key: 'status',
    dataIndex: 'status',
    width: 120,
    ellipsis: true,
  },
];

export const modalType: modalType = {
  0: {
    module: '已上传机构',
    title: '机构明细',
    key: 'haveAlreadyOrg',
    columns: orgColumns,
  },
  1: {
    module: '待上传机构',
    title: '机构明细',
    key: 'toBeUploadedOrg',
    columns: orgColumns,
  },
  2: {
    module: '待完善机构数',
    title: '机构明细',
    key: 'needToBeImprovedOrg',
    columns: orgColumns,
  },
  3: {
    module: '近3日未巡更机构',
    title: '机构明细',
    key: 'nearlyThreeDaysOrg',
    columns: orgColumns,
  },
  4: {
    module: '近一月未巡更机构',
    title: '机构明细',
    key: 'nearlyOneMonthsOrg',
    columns: orgColumns,
  },
  5: {
    module: '已打卡机构数',
    title: '机构明细',
    key: 'punchedMechanismsOrg',
    columns: orgColumns,
  },
  6: {
    module: '今日已完成值班打卡人次',
    title: '机构明细',
    key: 'dutyHasBeenCompleted',
    columns: clockColumns,
  },
  7: {
    module: '累计发现隐患',
    title: '隐患明细',
    key: 'totalHiddenDangerRectification',
    columns: hiddenDangerColumns,
  },
  8: {
    module: '超期未解决隐患',
    title: '隐患明细',
    key: 'unsolvedHiddenDanger',
    columns: hiddenDangerColumns,
  },
  9: {
    module: '近半年未组织培训机构',
    title: '机构明细',
    key: 'noTrainingInstitutionsWereOrg',
    columns: orgColumns,
  },
};
