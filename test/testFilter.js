let filter = require("../filter")
const array = [1,-2,3,-4,-5]

let cb = (a,i,arr) => a == arr[i];

const result = filter(array,cb)
console.log(result)