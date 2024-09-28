

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
const has = (v) =>{
    if(isNull(v)) return false
    if(isUndefined(v)) return false
    if(isArray(v)){
        return v.length>0
    }
    if(isEmptyObj(v)) return false
    return !!v
}

export {
    isNull,
    isUndefined,
    isArray,
    has,
    isEmptyObj,
}
