function reduce(array, callBack, startValue) {
    if (callBack == undefined || array == undefined || array.length == 0 || Array.isArray(array) === false) {
        return []
    }
    else {
        let reducer = startValue;

        if (Boolean(startValue) == false) {
            startValue = 0
            reducer = startValue
        }
        for (let i = 0; i < array.length; i++) {
            reducer = callBack(reducer, array[i], array);
        }
        return reducer
    }

}

module.exports = reduce;