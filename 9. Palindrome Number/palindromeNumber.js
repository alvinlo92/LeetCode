/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString();
  let beg = 0;
  let end = str.length - 1;
  
  while (beg <= end) {
      if (str[beg] !== str[end]) { return false; }
      beg += 1;
      end -= 1;
  }
  
  return true;
};
