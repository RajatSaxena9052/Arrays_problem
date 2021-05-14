let filter = require("../filter")
const array = [1, -2, 3, -4, -5]

let callBack = (element, index, arr) => element == arr[index];

const result = filter(array, callBack)
console.log(result)