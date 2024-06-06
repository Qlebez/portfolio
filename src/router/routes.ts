import { RouteRecordRaw } from 'vue-router';
import Index from 'pages/IndexPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
