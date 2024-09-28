import {createApp} from 'vue'
import App from './App.vue'
import Antd, {message, Modal} from 'ant-design-vue';
import router from './route/index'
import {baseURL,staticURL, http} from './http'
import constant from './constant'
import Crud from '@/components/Crud.vue'
import RemoteSelect from '@/components/RemoteSelect.vue'
import Upload from '@/components/Upload.vue'
import FullEditor from '@/components/FullEditor.vue'
import TimePicker from '@/components/TimePicker.vue'
import DatePicker from '@/components/DatePicker.vue'
import IconSelect from '@/components/IconSelect.vue'
import YesOrNo from '@/components/YesOrNo.vue'
import Select from '@/components/Select.vue'
import MapSelect from '@/components/MapSelect.vue'
import CheckBox from '@/components/CheckBox.vue'
import "./assets/icon/iconfont.css"
import {formatTime} from '@/util/time.js'
import {imgPreview} from '@/util/img/base.js'

const app = createApp(App)
app.config.globalProperties.post = (url, data,options = {}) => http('post', url, data,options)
app.config.globalProperties.get = (url, data,options={}) => http('get', url, data,options)
app.config.globalProperties.success = (msg = '成功！', duration = 1.2) => message.success(msg, duration)
app.config.globalProperties.error = (msg = '失败！', duration = 1.5) => message.error(msg, duration)
app.config.globalProperties.warning = (msg = '失败！', duration = 1.5) => message.warning(msg, duration)
app.config.globalProperties.loading = (msg = '加载中...', duration = 1.2) => {
	const hide = message.loading(msg, duration);
	setTimeout(hide, duration)
}
app.config.globalProperties.formatTime=formatTime
app.config.globalProperties.imgPreview=imgPreview
app.config.globalProperties.baseURL = baseURL
app.config.globalProperties.staticURL = staticURL
app.config.globalProperties.constant = constant

app.component('Crud', Crud)
app.component('RemoteSelect', RemoteSelect)
app.component('Upload', Upload)
app.component('FullEditor', FullEditor)
app.component('TimePicker', TimePicker)
app.component('DatePicker', DatePicker)
app.component('YesOrNo', YesOrNo)
app.component('Select', Select)
app.component('MapSelect', MapSelect)
app.component('CheckBox', CheckBox)
app.component('IconSelect', IconSelect)
app.use(Antd)
app.use(router)
app.mount('#app')
