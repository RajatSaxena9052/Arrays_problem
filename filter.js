function filter(arr, cb) {
    if (cb == undefined || typeof cb != 'function' || arr == undefined || arr.length == 0 || Array.isArray(arr) === false) {
        return []
    }
    else {
        const newArr = []
        for (let index = 0; index < arr.length; index++) {
            if (cb(arr[index], index, arr) == true) {
                newArr.push(arr[index]);
            }
        }
        return newArr
    }
}

module.exports = filter;