function filter(array, callBack) {
    if (callBack == undefined || typeof callBack != 'function' || array == undefined || array.length == 0 || Array.isArray(array) === false) {
        return []
    }
    else {
        const newArray = []
        for (let index = 0; index < array.length; index++) {
            if (callBack(array[index], index, array) == true) {
                newArray.push(array[index]);
            }
        }
        return newArray;
    }
}
module.exports = filter;