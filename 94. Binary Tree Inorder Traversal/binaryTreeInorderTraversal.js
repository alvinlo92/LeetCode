/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let stack = [];
  let res = [];
  let cur = root;
  while (cur || stack.length) {
      if (cur) {
          stack.push(cur);
          cur = cur.left;
      } else {
          cur = stack.pop();
          res.push(cur.val);
          cur = cur.right;
      }
  }
  return res;
};