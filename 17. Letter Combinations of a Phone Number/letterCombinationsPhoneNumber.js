/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === "") return [];
  let letters = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"};
  let combos = letters[digits[0]].split('');
  for (let i = 1; i < digits.length; i++) {
      let cur = [];
      for (let j = 0; j < combos.length; j++) {
          for (let k = 0; k < letters[digits[i]].length; k++) {
              cur.push(combos[j] + letters[digits[i]][k]);
          }
      }
      combos = cur;
  }
  return combos;
};