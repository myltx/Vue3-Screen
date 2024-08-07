import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { start, close } from '@/utils/nprogress';
import { LOGIN_OUT_PATH_PRODUCTION, LOGIN_PATH, MIDDLE_LOGIN_PATH } from '@/helper';
import { getToken } from '@/utils';
import { isDevFn } from '../../build/utils';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cockpit',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/middle',
    name: 'Middle',
    component: () => import('@/views/login/middle.vue'),
  },
  {
    path: '/cockpit',
    name: 'Cockpit',
    component: () => import('@/views/cockpit/index.vue'),
  },
  {
    path: '/institution',
    name: 'Institution',
    component: () => import('@/views/institution/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

const whiteList = [LOGIN_PATH, MIDDLE_LOGIN_PATH];

router.beforeEach((to, from, next) => {
  start();
  document.title = '驾驶舱';
  if (!getToken() && !whiteList.includes(to.path)) {
    if (isDevFn(import.meta.env.MODE)) {
      setTimeout(() => {
        next(MIDDLE_LOGIN_PATH);
      });
    } else {
      window.location.href = LOGIN_OUT_PATH_PRODUCTION;
    }
  } else {
    setTimeout(() => {
      next();
    });
  }
});
router.afterEach(() => {
  setTimeout(() => {
    close();
  }, 1000);
});
export default router;
