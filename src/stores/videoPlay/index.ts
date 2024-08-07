import { getVideoDeviceList } from '@/api/cockpit/cockpit';

export const usePlayVideo = defineStore('usePlayVideo', () => {
  const route = useRoute();
  const videoModalValue = ref(false);
  const activeVideo = ref(0);
  const videoList = ref([
    {
      name: '视频1',
      address: '杭州',
      id: 1,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
    {
      name: '视频2',
      address: '杭州',
      id: 2,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
    {
      name: '视频3',
      address: '杭州',
      id: 3,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
    {
      name: '视频4',
      address: '杭州',
      id: 4,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
  ]);
  const videoUrl = ref(
    'https://iot.stream.whenyoungcloud.cn:7443/rtp/00002252/hls.m3u8?deviceId=33000000001320000030&key=',
  );
  getVideoDeviceList({ orgId: route.query.orgId as string | number }).then((res) => {
    console.log(res, 'rrr');
  });
  const bloading = ref(false);
  const protocol = ref('');
  function playVideo(videoData: any, isMore?: boolean) {
    console.log(videoData);
    videoModalValue.value = true;
    if (!isMore) {
      activeVideo.value = videoData.id;
    }
  }
  function playVideoItem(videoData: any) {
    activeVideo.value = videoData.id;
  }
  return {
    videoList,
    videoModalValue,
    activeVideo,
    bloading,
    protocol,
    videoUrl,
    playVideo,
    playVideoItem,
  };
});
