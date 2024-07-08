import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import PostPage from '@/pages/PostPage.vue';
import CurrentPostPage from '@/pages/CurrentPostPage.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionApi,
  },
  {
    path: '/posts/:id',
    component: CurrentPostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
