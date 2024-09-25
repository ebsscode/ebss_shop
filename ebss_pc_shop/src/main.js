import {createApp} from 'vue'
import App from './App.vue'
import Antd, {message, Modal} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from './route/index'
import {baseURL, http} from './http'
import util from './util'
import constant from './constant'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import './assets/var.less'

const app = createApp(App)
app.config.globalProperties.nav = (url) => util.nav(url)
app.config.globalProperties.post = (url, data) => http('post', url, data)
app.config.globalProperties.get = (url, data) => http('get', url, data)
app.config.globalProperties.success = (msg = '成功！', duration = 1.2) => message.success(msg, duration)
app.config.globalProperties.error = (msg = '失败！', duration = 1.5) => message.error(msg, duration)
app.config.globalProperties.warning = (msg = '失败！', duration = 1.5) => message.warning(msg, duration)
app.config.globalProperties.loading = (msg = '加载中...', duration = 1.2) => {
	const hide = message.loading(msg, duration);
	setTimeout(hide, duration)
}
app.config.globalProperties.util = util
app.config.globalProperties.formatTime=util.formatTime
app.config.globalProperties.imgPreview=util.imgPreview
app.config.globalProperties.baseURL = baseURL
app.config.globalProperties.constant = constant

app.component('Footer', Footer)
app.component('Header', Header)
app.component('Search', Search)

app.use(Antd)
app.use(router)
app.mount('#app')
