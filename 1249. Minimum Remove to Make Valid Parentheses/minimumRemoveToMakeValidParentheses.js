/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let arr = s.split('');
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
          stack.push(i);
      } else if (s[i] === ")" && stack.length > 0) {
          stack.pop();
      } else if (s[i] === ")") {
          arr[i] = "";
      }
  }
  while (stack.length > 0) {
      arr[stack.pop()] = "";
  }
  return arr.join('');
};