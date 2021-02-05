/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let paths = path.split('/')
  let stack = [];
  for (let cur of paths) {
      if (cur === '..') {
          stack.pop();
      } else if (cur !== '.' && cur.length > 0) {
          stack.push(cur);
      }
  }
  return '/' + stack.join('/');
};