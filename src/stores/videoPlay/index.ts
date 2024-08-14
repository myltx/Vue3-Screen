import { getVideoDeviceList, getVideoUrl, stopVideo } from '@/api/cockpit/cockpit';

export const usePlayVideo = defineStore('usePlayVideo', () => {
  const route = useRoute();
  const videoModalValue = ref(false);
  const activeVideo = ref('');
  const channelId = ref('');
  const videoList = ref<any>([]);
  const videoUrl = ref('');
  function getList() {
    getVideoDeviceList({ orgId: route.query.orgId as string | number }).then((res: any) => {
      videoList.value = res.data;
    });
  }
  const bloading = ref(false);
  const protocol = ref('');
  async function playVideo(videoData: any, isMore?: boolean) {
    if (activeVideo.value) {
      await stopActiveVideo();
    }
    activeVideo.value = videoData.id;
    if (!isMore) {
      videoModalValue.value = true;
    }
    play();
  }

  function play() {
    getVideoUrl(activeVideo.value).then((res: any) => {
      if (res.code == 200) {
        videoUrl.value = res.data?.playUrl || '';
        channelId.value = res.data?.channelId || '';
      }
    });
  }
  async function stopActiveVideo() {
    await stopVideo(activeVideo.value, channelId.value);
    videoUrl.value = '';
    channelId.value = '';
    activeVideo.value = '';
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
    stopActiveVideo,
  };
});
