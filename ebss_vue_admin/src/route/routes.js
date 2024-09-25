import layoutIndex from '@/views/layout.index.vue'
export const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/index/index.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/index/login.vue'),
	},
	{
		path: '/home',
		name: 'home',
		component: layoutIndex,
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/index/home.vue')
			}
		]
	},
	{
		path: '/msg',
		name: 'msg',
		component: layoutIndex,
		children: [
			{
				path: '/msg',
				name: 'msgDisplay',
				component: () => import('@/views/index/msg.vue')
			}
		]
	},
]
