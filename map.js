function fn(arr,cb){
    if(cb == undefined || typeof arr != 'object' || arr == undefined || arr.length == 0 || Array.isArray(arr) == false){
        return []
    }
    else{
        var newArr=[]
        for(var i=0;i<arr.length;i++){
            newArr.push(cb(arr[i]))
        }
        return newArr
    }
}
module.exports = fn