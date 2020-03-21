module.exports = function repeater(str, options) {
    str = String(str);
    if(options.repeatTimes === undefined) options.repeatTimes=1;
    if(options.separator === undefined) options.separator='+';
    if(options.addition === undefined) {
        options.addition='';
    }
    else{
        options.addition = String(options.addition)
    }
    if(options.additionRepeatTimes === undefined) options.additionRepeatTimes=1;
    if(options.additionSeparator === undefined) options.additionSeparator='|';

    let res = '';
    for(let i=0; i<options.repeatTimes; i++){
        res = res + str;
        if(options.addition!=''){
            for(let j=0; j<options.additionRepeatTimes; j++){
                res = res + options.addition;
                if(j!==options.additionRepeatTimes-1){
                    res = res + options.additionSeparator;
                }
            }
        }
        if(i!==options.repeatTimes-1){
            res = res+options.separator;
        }
    }
    return res;
};