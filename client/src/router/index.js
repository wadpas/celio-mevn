import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/EmailList.vue'
import EmailView from '@/views/EmailView.vue'
import EmailList from '@/components/EmailList.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// {
		// 	path: '/',
		// 	name: 'home',
		// 	component: HomeView,
		// },
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
