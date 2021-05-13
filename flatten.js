function fn(nestedArray){
    if(typeof nestedArray != 'object' || nestedArray == undefined || nestedArray.length == 0 || Array.isArray(nestedArray) == false){
        return []
    }
    else{
    var newArray = []
    function flatten(nestedArray){

        for(var i=0;i<nestedArray.length;i++){
                if(typeof nestedArray[i] == 'object'){
                    flatten(nestedArray[i])
                }
                else{
                    newArray.push(nestedArray[i])
                }
            }
            return newArray
        }
    
        return flatten(nestedArray)
    }
}

module.exports = fn;