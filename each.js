function each(array,cb){
if(cb == undefined || array == undefined || array.length==0 || Array.isArray(array) === false){
    return []
}else{
    for(let index = 0;index < array.length;index++){
            cb(array[index],index,array)
        }
    
    }
}

module.exports = each;