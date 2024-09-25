

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
export {
    getTime10,
    getTodayStartTime,
    formatHmi,
    formatTime,
}
