var each = require("../each")
const array = [1,2,3,4];

let cb = (ele,i,a) => console.log(ele,i,a) ;

console.log(each(array,cb))
