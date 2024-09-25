import {createRouter, createWebHashHistory} from 'vue-router'
import {routes} from './routes'
import {getPermissions, toRouteList} from "../util/user/permisson";

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
router.beforeEach(async (to, from, next) => {
	let token = localStorage.getItem('token')
	if (!token && to.name !== 'login') {
		next({path: '/login'})
		return
	}
	let vueRoutes = router.getRoutes()
	// console.log('vueRoutes',vueRoutes)
	let hasRoute = vueRoutes.find(i=>i.path==to.path)
	// console.log('hasRoute',hasRoute,to)
	if(!hasRoute){
		let backendRoutes = await getPermissions()
		let routeList = toRouteList(backendRoutes)
		// console.log('routeList',routeList)
		routeList.forEach(i=>{
			router.addRoute(i)
		})
		// console.log('backendRoutes',backendRoutes,to)
		let hasToPermission = backendRoutes.find(i=>i.path == to.path)
		if(!hasToPermission){
			next({path: '/msg',query:{error:'没有权限'}})
		}else{
			next({path: to.path})
		}
	}else{
		next()
	}
})
export default router
