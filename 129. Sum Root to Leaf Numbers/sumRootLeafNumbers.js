/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  let stack = [root];
  let prevNums = [0];
  let sum = 0;
  while (stack.length) {
      let node = stack.pop();
      let cur = prevNums.pop();
      cur = cur * 10 + node.val;
      if (!node.left && !node.right) {
          sum += cur;
      } else {
          if (node.right) {
              stack.push(node.right);
              prevNums.push(cur);
          }
          if (node.left) {
              stack.push(node.left);
              prevNums.push(cur);
          }
      }
  }
  return sum;
};