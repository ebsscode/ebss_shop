

const isNull = (exp)=>{
    return !exp && typeof(exp)!="undefined" && exp!=0
}
const isUndefined = (exp)=>{
    return typeof(exp) == "undefined"
}
const isArray = (v)=>{
    return v instanceof Array
}
const isEmptyObj = (v)=>{
    return Object.keys(v).length === 0
}
const isObj = (v)=>{
    return Object.prototype.toString.call(v) === '[object Object]'
}
const isStr = (v)=>{
    return Object.prototype.toString.call(v)==="[object String]"
}
const has = (v) =>{
    if(isNull(v)) return false
    if(isUndefined(v)) return false
    if(isArray(v)){
        return v.length>0
    }
    if(isObj(v)){
        return !isEmptyObj(v)
    }
    if(v==='') return false
    if(isStr(v)){
        return v.length > 0
    }
    if(Number.isNaN(v)) return false
    if(v===0) return false

    return !!v
}

export {
    isNull,
    isUndefined,
    isArray,
    has,
    isEmptyObj,
    isObj,
    isStr,
}
