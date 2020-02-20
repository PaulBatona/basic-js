const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age = 0;
  if(typeof(sampleActivity)!="string"){
    return false;
  }
  else{
      console.log(Math.round(age = Math.log((MODERN_ACTIVITY/sampleActivity))/HALF_LIFE_PERIOD));
  }
};
