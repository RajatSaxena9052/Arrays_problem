let reduce = (array, callBack, initialValue) => {
    if (callBack == undefined || array == undefined || array.length == 0 || Array.isArray(array) === false) {
        return []
    }
    else {

        let result = initialValue;
        let index = 0;

        if (initialValue == undefined) {
            result = array[0]
            index++;
        }
        while (index < array.length) {
            let currentValue = array[index]
            result = callBack(result, currentValue, index, array);
            index++
        }
        return result
    }

}

module.exports = reduce;