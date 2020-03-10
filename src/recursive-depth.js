module.exports = class DepthCalculator {
    calculateDepth(arr, depth) {
        //console.log(JSON.stringify(arr));
        if(!depth){depth=1;}
        for(let i=0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                depth = Math.max(this.calculateDepth(arr[i],depth+1),depth);
            }
        }
        return depth;
    }
};