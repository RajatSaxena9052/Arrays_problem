var reduce = require("../reduce")

const array = [1, 2, 3]
const startValue = 10;

let cb = ((a, c) => a + c)

const result = reduce(array, cb, startValue);

console.log(result)
