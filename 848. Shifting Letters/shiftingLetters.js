/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  let sumShifts = shifts.reduce((acc, cur) => acc + cur, 0);
  let arr = S.split('');
  let res = "";
  for (let i = 0; i < arr.length; i++) {
      let num = sumShifts % 26;
      num = arr[i].charCodeAt() + num;
      while (num > 122) {
          num = num % 122 + 96
      }
      res += String.fromCharCode(num);
      sumShifts -= shifts[i];
  }
  return res;
};