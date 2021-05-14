var reduce = require("../reduce")

const array = [9, 6, 8, 7];
let startValue = 10

let callBack = ((accumulator, current, index, arr) => accumulator + (current + arr[index]))

const result = reduce(array, callBack, startValue);
console.log(result);

