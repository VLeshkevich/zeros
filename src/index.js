module.exports = function getZerosCount(number) {
  var zeros = 0;

  while(number >= 5){
  	number = Math.floor(number/5);
  	zeros = zeros + number;
  }
  
  return zeros;
}
