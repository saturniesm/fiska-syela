import { createRouter, createWebHistory } from 'vue-router'
import Resume from '@/views/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'resume',
      component: Resume,
    },
  ],
})

export default router
