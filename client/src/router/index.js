import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import EmailView from '@/views/EmailView.vue'
import EmailList from '@/components/EmailList.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/auth',
			component: AuthView,
		},
		{
			path: '/',
			component: EmailView,
			children: [
				{
					path: '',
					component: EmailList,
				},
			],
		},
	],
})

export default router
