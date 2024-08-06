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
    playVideo,
    playVideoItem,
  };
});
