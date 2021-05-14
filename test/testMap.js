var map = require("../map")
const array = [1, 2, 3, 4, 5];

let callBack = (element, index, arr) => element * element;

const result = map(array, callBack);

console.log(result);
