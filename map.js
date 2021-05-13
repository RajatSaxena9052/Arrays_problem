function fn(arr,i){
    if(typeof arr != 'object' || arr == undefined || arr.length == 0 || Array.isArray(arr) == false){
        return []
    }
    else{
        let newArr=[]

        function base(arr,cbWith){
            for(var i=0;i<arr.length;i++){
                cbWith(arr[i],i)
            }
        }
        function cbWith(ele,ind){
            console.log(ind);
            newArr.push(ele);
        }
        function cbWithOut(ele){
            newArr.push(ele);
        }

        
        if( i != undefined){
            base(arr,cbWith)
            return newArr
        }else{
            base(arr,cbWithOut)
            return newArr
        }
    }
}
module.exports = fn