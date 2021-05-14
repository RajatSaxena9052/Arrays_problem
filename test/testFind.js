var find = require("../find")
const array = [1, 2, 3, 4]

let cb = (a, i, arr) => a > 2

const result = find(array, cb)

console.log(result)
