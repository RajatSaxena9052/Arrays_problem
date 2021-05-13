function map(arr,cb){
    if(cb == undefined || typeof cb != 'function' || typeof arr != 'object' || arr == undefined || arr.length == 0 || Array.isArray(arr) == false){
        return []
    }
    else{
        var newArr=[]
        for(var index=0;index<arr.length;index++){
            newArr.push(cb(arr[index],index,arr))
        }
        return newArr
    }
}
module.exports = map
