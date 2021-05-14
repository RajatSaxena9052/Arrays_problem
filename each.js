function each(array, callBack) {
    if (callBack == undefined || array == undefined || array.length == 0 || Array.isArray(array) === false) {
        return []
    } else {
        for (let index = 0; index < array.length; index++) {
            callBack(array[index], index, array)
        }
    }
}

module.exports = each;
