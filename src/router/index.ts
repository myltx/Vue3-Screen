import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { start, close } from '@/utils/nprogress';
import { LOGIN_OUT_PATH, LOGIN_PATH, MIDDLE_LOGIN_PATH } from '@/helper';
import { getToken } from '@/utils';
import { isDevFn } from '../../build/utils';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cockpit',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
      },
    ],
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
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

const whiteList = [LOGIN_PATH, MIDDLE_LOGIN_PATH];

router.beforeEach((to, from, next) => {
  start();
  if (!getToken() && !whiteList.includes(to.path)) {
    if (isDevFn(import.meta.env.MODE)) {
      setTimeout(() => {
        next(LOGIN_OUT_PATH);
      });
    } else {
      window.location.href = LOGIN_OUT_PATH;
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
