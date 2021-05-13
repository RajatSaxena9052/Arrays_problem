function filter(arr){
    if(arr == undefined || arr.length == 0 || Array.isArray(arr) === false){
        return []
        }
    else{
        const newArr=[]
        function base(arr){
                for(let i=0;i<arr.length;i++){
                    cb(arr[i])       
                    }
                }
        function cb(ele){
                    if(ele > 2){
                        newArr.push(ele)
                    }
                }
            base(arr,cb)
        return newArr
    }
}
    
    module.exports = filter;