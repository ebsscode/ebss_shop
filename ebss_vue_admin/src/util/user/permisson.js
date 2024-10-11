import {http} from '@/http.js'
import layoutIndex from '@/views/layout.index.vue'

const getPermissions = async () => {
    let {permissions,role_id, code} = await http('post','/admin/user/permissions')
    if (code == 1) {
       return permissions
    }else{
        return []
    }
}
const getMenus = async (view) => {
    let permissions = await getPermissions()
    let menus = permissions.filter(i => i.is_show==1 && i.is_menu==1)
    return menus
}
const getRoutes = async (view) => {
    let permissions = await getPermissions()
    let routes = permissions.filter(i => i.is_show==1 && i.path && i.component)
    return routes
}

const toRouteList = (list) => {
    let modules = import.meta.glob('../../views/**/*.vue')
    let result = []
    for (let i=0;i<list.length;i++) {
        if (list[i].pid == 0) {
            let routeItem = {
                name:list[i].name,
                path:list[i].path,
                component:layoutIndex,
                children:[],
            }
            if(list[i].component){
                routeItem.children =[{
                    name:list[i].name,
                    path:list[i].path,
                    component:modules[`../../views${list[i].component}.vue`],
                    children:[],
                }]
            }else{
                for (let j = 0; j < list.length; j++) {
                    if (list[j].pid == list[i].permission_id) {
                        routeItem.children.push({
                            name:list[j].name,
                            path:list[j].path,
                            component:modules[`../../views${list[j].component}.vue`],
                        })
                    }
                }
            }
            result.push(routeItem)
        }
    }
    return result
}

export {
    getPermissions,
    getMenus,
    getRoutes,
    toRouteList,
}
