function fn(nestedArray) {
    if (typeof nestedArray != 'object' || nestedArray == undefined || nestedArray.length == 0 || Array.isArray(nestedArray) == false) {
        return []
    }
    else {
        let newArray = []
        function flatten(nestedArray) {

            for (let index = 0; index < nestedArray.length; index++) {
                if (typeof nestedArray[index] == 'object') {
                    flatten(nestedArray[index])
                }
                else {
                    newArray.push(nestedArray[index])
                }
            }
            return newArray
        }

        return flatten(nestedArray)
    }
}

module.exports = fn;