module.exports = function transform(arr) {
    if(arr.length===0){
        return [];
    }
    else if(arr.length==1){
        if(arr[0]==='--discard-prev' || arr[0]==='--discard-next' || arr[0]==='--double-next' || arr[0]==='--double-prev'){
            return [];
        }
    }
    else if(Array.isArray(arr)){
        for(let i=0; i<arr.length; i++){
            if(arr[i]=='--discard-next'){
                if(i==arr.length-1){continue}
                else{arr.splice(i,2);}
            }
            else if(arr[i]=='--discard-prev'){
                if(i==0){continue}
                else{arr.splice(i-1,2);}
            }
            else if(arr[i]=='--double-next'){
                if(i==arr.length-1){continue}
                else{
                    arr.splice(i,1);
                    arr.splice(i,0,arr[i]);
                }
            }
            else if(arr[i]=='--double-prev'){
                if(i==0){continue}
                else{
                    arr.splice(i,1);
                    arr.splice(i-1,0,arr[i-1]);
                }
            }
        }

        return(arr);
    }
    else{
        throw Error;
    }
};
