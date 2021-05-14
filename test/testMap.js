var map = require("../map")
const arr = [1, 2, 3, 4, 5];

let cb = (ele, ind, arr) => ele * ele;

const result = map(arr, cb);

console.log(result);
