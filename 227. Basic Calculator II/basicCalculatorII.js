/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (!s.length) return 0;
  s = s.replace(/[\s]/g, '');
  let stack = [];
  let num = '';
  let oper = '+';
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (!isNaN(char)) num += char;
      if (isNaN(char) || i == s.length - 1) {
          if (oper === '-') {
              stack.push(-num);
          } else if (oper === '+') {
              stack.push(+num);
          } else if (oper === '*') {
              stack.push(stack.pop() * num);
          } else if (oper === '/') {
              stack.push(Math.trunc(stack.pop() / num));
          }
          oper = char;
          num = '';
      }
  }
  let res = 0;
  while (stack.length > 0) {
      res += stack.pop();
  }
  return res;
};