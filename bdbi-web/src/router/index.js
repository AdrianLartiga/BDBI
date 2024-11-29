// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PageLogin from '../components/PageLogin.vue';
import PageHome from '../components/PageHome.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: PageLogin,
  },
  {
    path: '/home',
    name: 'Home',
    component: PageHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
