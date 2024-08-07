export const usePlayVideo = defineStore('usePlayVideo', () => {
  const videoModalValue = ref(false);
  const activeVideo = ref(0);
  const videoList = ref([
    {
      name: '视频1',
      address: '杭州',
      id: 1,
      url: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
    },
  ]);
  videoList.value = [];
  const videoUrl = ref(
    'https://iot.stream.whenyoungcloud.cn:7443/rtp/00002252/hls.m3u8?deviceId=33000000001320000030&key=',
  );
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
