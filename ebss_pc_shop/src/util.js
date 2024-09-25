import dayjs from 'dayjs'
import {message, Modal} from "ant-design-vue";
import XEClipboard from "xe-clipboard";
import router from "@/route/index";

const arrayToTree = (list, root_key = 'id', root = 0, rootName = 'pid') => {
	return list
		.filter(item => item[rootName] === root)
		.map(item => ({...item, children: arrayToTree(list, root_key, item[root_key])}))
}
const isNull = (exp)=>{
	return !exp && typeof(exp)!="undefined" && exp!=0
}
const isUndefined = (exp)=>{
	return typeof(exp) == "undefined"
}
const isArray = (v)=>{
	return v instanceof Array
}

const getTime10 = (date=null) =>{
	if(!date){
		date = new Date()
	}
	let tmp = Date.parse( date ).toString();
	tmp = tmp.substr(0,10);
	return tmp*1;
}
const getTodayStartTime = (date=null) =>{
	if(!date){
		date = new Date()
	}
	let date_new = new Date(date.setHours(0, 0, 0, 0))
	return getTime10(date_new);
}
const formatHmi = (time) =>{
	if(!time)return ''
	// let date = new Date(time);
	let date = new Date((time+getTodayStartTime()) * 1000);
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();

	hh = hh < 10 ? ('0' + hh) : hh;
	mm = mm < 10 ? ('0' + mm) : mm;
	ss = ss < 10 ? ('0' + ss) : ss;

	return hh + ':' + mm + ':' + ss;
}
const formatTime = (time) => {
	if(!time)return ''
	let date = new Date(time * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	let YYYY = date.getFullYear();
	let MM = date.getMonth() + 1;
	let DD = date.getDate();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();

	MM = MM < 10 ? ('0' + MM) : MM;
	DD = DD < 10 ? ('0' + DD) : DD;
	hh = hh < 10 ? ('0' + hh) : hh;
	mm = mm < 10 ? ('0' + mm) : mm;
	ss = ss < 10 ? ('0' + ss) : ss;

	return YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss;
}
const imgPreview = (img) => {
	const modal = Modal.success({
		title: `${img}`,
		content: `${img}`,
	});
}
const copy = (text) => {
	XEClipboard.copy(text)
	message.info('复制成功');
}
const setStorage = (key,value) => {
	localStorage.setItem(key,JSON.stringify({
		type:typeof value,
		value:value,
	}))
}
const getStorage = (key) => {
	let value = localStorage.getItem(key)
	if(!value)return null
	value = JSON.parse(value)
	return value.value
}
const nav = (url) => {
	router.push({ path: url, })
}
export default {
	arrayToTree,
	dayjs,
	isNull,
	isUndefined,
	getTime10,
	getTodayStartTime,
	formatHmi,
	formatTime,
	imgPreview,
	isArray,
	copy,
	setStorage,
	getStorage,
	nav,
}
