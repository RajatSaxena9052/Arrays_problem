function each(array,i){
if(array == undefined || array.length==0 || Array.isArray(array) === false){
    return []
}else{
    function withIndex(ele,ind){
        console.log(ele,ind)
    }
    function withoutIndex(ele){
        console.log(ele)
    }
    
    function base(arr,cb){
        for(var i=0;i<arr.length;i++){
            cb(arr[i],i)
        }
    }

    if(i != undefined){
        return base(array,withIndex)
    }
    else{
        return base(array,withoutIndex)
    }
}
}

module.exports = each;