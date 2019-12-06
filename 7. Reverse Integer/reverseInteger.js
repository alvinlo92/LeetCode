/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = x.toString();
  let rvr = "";
  
  for (var i = str.length - 1; i >= 0; i--) {
      rvr += str[i];
  }
  
  let num = parseInt(rvr);
  
  if (str[0] === "-") {
      num *= -1;
  }
  
  if (num > Math.pow(2, 31) || num < Math.pow(-2, 31)) {
      return 0;
  }
  
  return num;
};
