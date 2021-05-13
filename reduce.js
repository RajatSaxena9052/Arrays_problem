function reduce(arr,startValue){
    if(arr == undefined || arr.length == 0 || Array.isArray(arr) === false){
        return []
        }
    else{
        let aggr = null;
        function base(arr,cb,startValue){
                for(let i=0;i<arr.length;i++){
                    cb(startValue, arr[i])       
                    }
                }

        function cb( startValue, ele){
            if(aggr == null && startValue != undefined && startValue != 'string'){
                aggr = startValue;
                aggr += ele
            }else{

            if(typeof ele == 'string' && Number(ele) == NaN){
                    aggr = ""
                    aggr += ele
            }
            else{
                        aggr += ele
                   }
                
                }
            }
            base(arr,cb,startValue)
        return aggr
        }
    }
    
    module.exports = reduce;