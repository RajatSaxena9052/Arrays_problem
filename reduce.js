function reduce(arr,cb,startValue){
    if(cb == undefined || arr == undefined || arr.length == 0 || Array.isArray(arr) === false){
        return []
        }
    else{
        let aggr = startValue;
        
        if(Boolean(startValue)==false){
            startValue = 0
            aggr = startValue
        }
        for(let i=0;i<arr.length;i++){  
            aggr = cb(aggr, arr[i]) 
            }
            return aggr
        }
    
    }
    
    module.exports = reduce;