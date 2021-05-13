function find(arr){
if(arr == undefined || arr.length == 0 || Array.isArray(arr) === false){
    return []
    }
else{
    function base(arr){
            for(let i=0;i<arr.length;i++){
                if( cb(arr[i]) == true){
                     return arr[i]       
                }
            }
    }
    function cb(ele){
                return ele > 3
            }
        return base(arr,cb)
    }
}

module.exports = find;