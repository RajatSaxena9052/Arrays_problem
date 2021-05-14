var reduce = require("../reduce")

const array = [1, 2, 3]
const startValue = 10;

let callBack = ((accumulator, current, ar) => accumulator + current + ar[0])

const result = reduce(array, callBack, startValue);

console.log(result)

