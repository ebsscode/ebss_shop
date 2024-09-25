import axios from 'axios'
import {message} from 'ant-design-vue';
import util from './util'

let baseURL = 'https://h.vivivi.club'
const service = axios.create({
	baseURL: baseURL+'/index/',
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
		if (res.code === 0) {
			message.error(res.msg||'服务器响应格式错误');
		}
		return res
	},
	error => {
		console.error('response-error', error)
		message.info('服务器响应错误！');
		return Promise.reject(error)
	}
)
const http = (method = 'get', url, param) => {
	let httpDefaultOpts = {
		method: method,
		url,
		params: param,
		data: param,
		headers: {
			'token': util.getStorage('token') || '',
			'user-id': util.getStorage('user_id') || '',
			'platform': 'shop',
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
	baseURL
}
