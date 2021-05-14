function map(array, callBack) {
    if (callBack == undefined || typeof callBack != 'function' || typeof array != 'object' || array == undefined || array.length == 0 || Array.isArray(array) == false) {
        return []
    }
    else {
        let newArr = []
        for (var index = 0; index < array.length; index++) {
            newArr.push(callBack(array[index], index, array))
        }
        return newArr
    }
}
module.exports = map
