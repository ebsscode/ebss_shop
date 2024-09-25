import {arrAttrFind}  from '@/util/format/array.js'


export const labelType = (key)=>{
    let list = [
        {
            name: '用户标签',
            value: 1,
        },{
            name: '商品标签',
            value: 2,
        }
    ]
    if(key){
        return arrAttrFind(list,'value',key,'name')
    }
    return list
}

