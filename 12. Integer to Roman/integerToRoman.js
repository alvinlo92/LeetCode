/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let ans = "";
  let i = 0;
  while (num > 0) {
      if (num - vals[i] >= 0) {
          ans += romans[i];
          num -= vals[i];
      } else {
          i++
      }
  }
  return ans;
};