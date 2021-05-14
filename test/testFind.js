var find = require("../find")
const array = [1, 2, 3, 4]

let callBack = (element, index, arr) => element > 2

const result = find(array, callBack)

console.log(result)
