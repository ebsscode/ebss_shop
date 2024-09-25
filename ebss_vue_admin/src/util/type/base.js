

const isNull = (exp)=>{
    return !exp && typeof(exp)!="undefined" && exp!=0
}
const isUndefined = (exp)=>{
    return typeof(exp) == "undefined"
}
const isArray = (v)=>{
    return v instanceof Array
}

export {
    isNull,
    isUndefined,
    isArray,
}
