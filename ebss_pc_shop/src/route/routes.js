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
		path: '/goods',
		name: 'goods',
		component: layoutIndex,
		children: [
			{
				path: 'detail',
				name: 'goodsdetail',
				component: () => import('@/views/goods/detail.vue')
			},
			{
				path: 'list',
				name: 'goodslist',
				component: () => import('@/views/goods/list.vue')
			},
			{
				path: 'cart',
				name: 'cart',
				component: () => import('@/views/goods/cart.vue')
			},
			{
				path: 'spike',
				name: 'spike',
				component: () => import('@/views/goods/spike.vue')
			}
		]
	},{
		path: '/order',
		name: 'order',
		component: layoutIndex,
		children: [
			{
				path: 'detail',
				name: 'orderdetail',
				component: () => import('@/views/order/detail.vue')
			},
			{
				path: 'list',
				name: 'orderlist',
				component: () => import('@/views/order/list.vue')
			},
			{
				path: 'create',
				name: 'ordercreate',
				component: () => import('@/views/order/create.vue')
			}
		]
	},{
		path: '/user',
		name: 'user',
		component: layoutIndex,
		children: [
			{
				path: 'addr',
				name: 'addrlist',
				component: () => import('@/views/user/addr.vue')
			},
		]
	},
]
