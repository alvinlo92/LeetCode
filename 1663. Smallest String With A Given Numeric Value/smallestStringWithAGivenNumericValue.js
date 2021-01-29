/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let str = "";
  k -= n;
  for (let i = n; i >= 0; i--) {
      if (k >= 26) {
          k -= 25;
          str = "z" + str;
      } else {
          str = String.fromCharCode(97 + k) + str;
          n--;
          break;
      }
      n--;
  }
  while (n > 0) {
      str = "a" + str;
      n--;
  }
  return str;
};