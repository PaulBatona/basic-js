module.exports = function countCats(backyard) {
  let number = 0;
  for(var x = 0; x < arr.length; x++){
    for(var j = 0; j < arr[x].length; j++) {
      if (arr[x][j]=="^^"){
        number++;
      };
    };
  return number;
};
