import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Play from '@/views/Play.vue'
import Customize from '@/views/Customize.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/play',
    name: 'Play',
    component: Play,
  },
  {
    path: '/customize',
    name: 'Customize',
    component: Customize,
  },
];

const router = createRouter({
  history: createWebHistory('/math-decode-game'),
  routes,
})

export default router;