
export const arrayToTree = (list, root_key = 'id', root = 0, rootName = 'pid') => {
    return list
        .filter(item => item[rootName] === root)
        .map(item => ({...item, children: arrayToTree(list, root_key, item[root_key])}))
}
export const arrFind = (list=[],findLabel, findValue) => {
    return list.find(i=>i[findLabel]==findValue)
}
export const arrAttrFind = (list=[],findLabel, findValue,returnLabel) => {
    let find = list.find(i=>i[findLabel]==findValue)
    return find?find[returnLabel]:null
}

