/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s = "";
  let t = "";
  let backspace = 0;
  for (let i = S.length - 1; i >= 0; i--) {
      if (S[i] === "#") {
          backspace++;
      } else if (S[i] !== "#" && backspace > 0) {
          backspace--;
      } else {
          s = S[i] + s;
      }
  }
  backspace = 0;
  for (let j = T.length - 1; j >= 0; j--) {
      if (T[j] === "#") {
          backspace++;
      } else if (T[j] !== "#" && backspace > 0) {
          backspace--;
      } else {
          t = T[j] + t;
      }
  }
  return s === t;
};