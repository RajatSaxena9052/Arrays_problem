function find(arr,cb){
if(cb == undefined || typeof cb != 'function' || arr == undefined || arr.length == 0 || Array.isArray(arr) === false){
    return []
    }
else{
    for(let index = 0;index<arr.length;index++){
        if(cb(arr[index],index,arr) == true){
            return arr[index]       
                }
            }
    return undefined
        }
}

module.exports = find;