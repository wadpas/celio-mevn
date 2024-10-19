import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EmailView from '@/views/EmailView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/email',
			component: EmailView,
			children: [
				{
					path: '',
					component: HomeView,
				},
			],
		},
	],
})

export default router
