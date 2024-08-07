import { getVideoDeviceList, getVideoUrl } from '@/api/cockpit/cockpit';

export const usePlayVideo = defineStore('usePlayVideo', () => {
  const route = useRoute();
  const videoModalValue = ref(false);
  const activeVideo = ref(0);
  const videoList = ref<any>([]);
  const videoUrl = ref(
    'https://iot.stream.whenyoungcloud.cn:7443/rtp/00002252/hls.m3u8?deviceId=33000000001320000030&key=',
  );
  function getList() {
    getVideoDeviceList({ orgId: route.query.orgId as string | number }).then((res: any) => {
      videoList.value = res.data;
    });
  }
  const bloading = ref(false);
  const protocol = ref('');
  function playVideo(videoData: any, isMore?: boolean) {
    console.log(videoData);
    activeVideo.value = videoData.id;
    if (!isMore) {
      videoModalValue.value = true;
    }
    play();
  }
  function play() {
    getVideoUrl(activeVideo.value).then((res: any) => {
      console.log(res);
    });
  }
  return {
    videoList,
    videoModalValue,
    activeVideo,
    bloading,
    protocol,
    videoUrl,
    playVideo,
    getList,
  };
});
