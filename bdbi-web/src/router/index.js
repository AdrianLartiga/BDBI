import { createRouter, createWebHashHistory } from 'vue-router'; // Cambiar a createWebHashHistory
import PageLogin from '../components/PageLogin.vue';
import PageHome from '../components/PageHome.vue';

const routes = [
  {
    path: '/',
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
  history: createWebHashHistory(), // Cambiar a createWebHashHistory
  routes,
});

export default router;
