<script setup lang="ts">
  import { getUserCurrentInfo } from '@/api/cockpit/user';
  import { useMessage } from '@/hooks/useMessage';
  import { useLoadingStore } from '@/stores/loading';
  import { setToken, setUserInfo } from '@/utils';
  import { loginOut } from '@/utils/http/axios/utils';

  const route = useRoute();
  const router = useRouter();
  const { startLoading, endLoading } = useLoadingStore();
  const { createMessage } = useMessage();
  const { token, orgId, name } = route.query;
  startLoading();
  if (!token) {
    if (import.meta.env.DEV) {
      createMessage.warn('请先登录');
    } else {
      loginOut('请先登录');
    }
  } else {
    setToken(token as string);
    // 获取用户信息
    // 这里走免登接口
    getUserCurrentInfo().then((res: any) => {
      if (res.code == 200) {
        setUserInfo(res.data);
        createMessage.success('登录成功');
        // 跳转页面
        setTimeout(() => {
          endLoading();
          if (orgId) {
            router.replace({
              path: '/institution',
              query: {
                orgId,
                name,
              },
            });
          } else {
            router.replace('/');
          }
        }, 2000);
      }
    });
  }
</script>
<template>
  <PageWrapper :show-header="false">
    <Loading class="loading" />
  </PageWrapper>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
</style>
