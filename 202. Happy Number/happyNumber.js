/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let checked = {};
  checked[n] = true;
  while (n > 1) {
      n = n.toString().split('').reduce((sum, ele) => +sum + ele * ele, 0);
      if (checked[n]) {
          return false;
      } else {
          checked[n] = true;
      }
  }
  return true;
};