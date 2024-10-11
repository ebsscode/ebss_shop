import axios from 'axios'
import {message} from 'ant-design-vue';
import router from "@/route/index";

const mode = import.meta.env.MODE
const baseURL = () =>{
	if(mode=='php'){
		return 'https://h.vivivi.club'
	}
	if(mode=='java'){
		return 'http://localhost:8050'
	}
	if(mode=='java_prod'){
		return ''
	}
	if(mode=='php_prod'){
		return ''
	}
	if(mode=='java_demo'){
		return 'https://ebss-java.vivivi.club'
	}
	if(mode=='php_demo'){
		return 'https://ebss-php.vivivi.club'
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
	let httpDefaultOpts = {
		method: method,
		url,
		params: param,
		data: param,
		headers: {
			'token': localStorage.getItem('token') || '',
			'user-id': localStorage.getItem('user_id') || '',
			'mch-id': localStorage.getItem('mch_id') || '',
			'base-module-id': localStorage.getItem('base_module_id') || 1,
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
