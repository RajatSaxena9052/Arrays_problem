var reduce = require("../reduce")

const array = [1, 2, 3, 4, 5, 5]
const startValue = 0;

let callBack = ((accumulator, current, index, ar) => accumulator + (current ** 3))

const result = reduce(array, callBack, startValue);

console.log(result)

