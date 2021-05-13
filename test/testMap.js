var fn = require("../map")
const arr =[1, 2, 3, 4];

const cb = (i) => i*i;

const result = fn(arr,(i) => i*i)
console.log(result)