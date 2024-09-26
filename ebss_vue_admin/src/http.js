import axios from 'axios'
import {message} from 'ant-design-vue';
import router from "@/route/index";

const mode = import.meta.env.MODE
const baseURL = () =>{
	if(mode=='development'){
		return 'https://h.vivivi.club'
	}
	if(mode=='demo'){
		return 'https://ebss.vivivi.club'
	}
	if(mode=='production'){
		return 'https://h.vivivi.club'
	}
}
const staticURL = () => {
	return 'https://file.vivivi.club'
}
const service = axios.create({
	baseURL: baseURL(),
	withCredentials: false,
	timeout: 20000
})
service.interceptors.request.use(
	config => {
		config.url = config.url
		return config
	},
	error => {
		// do something with request error
		console.error('request-error', error)
		return Promise.reject(error)
	}
)
service.interceptors.response.use(
	response => {
		const res = response.data
		if (res.code == 0) {
			message.error(res.msg||'服务器响应格式错误');
		}
		if (res.code == 401) {
			router.replace('/login');return;
		}
		return res
	},
	error => {
		console.error('response-error', error)
		message.info('服务器响应错误！');
		return Promise.reject(error)
	}
)
const http = (method = 'get', url, param,options={}) => {
	console.log('mode',mode)

	let httpDefaultOpts = {
		method: method,
		url,
		params: param,
		data: param,
		headers: {
			'token': localStorage.getItem('token') || '',
			'user-id': localStorage.getItem('user_id') || '',
			'mch-id': localStorage.getItem('mch_id') || '',
			'base-module-id': localStorage.getItem('base_module_id') || '',
			'active-module-id': options.module_id || '',
			'platform': 'admin',
		},
	}
	if (method === 'get') {
		delete httpDefaultOpts.data
	} else {
		delete httpDefaultOpts.params
	}
	return new Promise((resolve, reject) => {
		service(httpDefaultOpts).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
export {
	http,
	baseURL,
	staticURL,
}
