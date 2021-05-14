function find(array, callBack) {
    if (callBack == undefined || typeof callBack != 'function' || array == undefined || Array.isArray(array) === false) {
        return []
    }
    else {
        for (let index = 0; index < array.length; index++) {
            if (callBack(array[index], index, array) == true) {
                return array[index]
            }
        }
        return undefined
    }
}

module.exports = find;
