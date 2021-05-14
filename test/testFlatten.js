var fn = require("../flatten")

const nestedArray = [1, [2], [[3]], [[[4]]]];

const result = fn(nestedArray)

console.log(result)
