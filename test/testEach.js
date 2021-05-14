var each = require("../each")
const array = [1, 2, 3, 4];

let callBack = (element, index, arr) => console.log(element, index, arr);

console.log(each(array, callBack))
