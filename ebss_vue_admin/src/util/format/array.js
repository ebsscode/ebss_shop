
const arrayToTree = (list, root_key = 'id', root = 0, rootName = 'pid') => {
    return list
        .filter(item => item[rootName] === root)
        .map(item => ({...item, children: arrayToTree(list, root_key, item[root_key])}))
}
const arrFind = (list=[],findLabel, findValue) => {
    return list.find(i=>i[findLabel]==findValue)
}
const arrAttrFind = (list=[],findLabel, findValue,returnLabel) => {
    let find = list.find(i=>i[findLabel]==findValue)
    return find?find[returnLabel]:null
}

const cartesianProduct = (array) =>{
    return array.reduce(function(a,b){
        return a.map(function(x){
            return b.map(function(y){
                return x.concat(y);
            })
        }).reduce(function(a,b){ return a.concat(b) },[])
    }, [[]])
}

export {
    arrayToTree,
    arrFind,
    arrAttrFind,
    cartesianProduct,
}
