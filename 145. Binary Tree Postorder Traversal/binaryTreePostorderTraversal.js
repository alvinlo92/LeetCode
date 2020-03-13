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
var postorderTraversal = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
      let tree = stack.pop();
      res.unshift(tree.val);
      if (tree.left) stack.push(tree.left);
      if (tree.right) stack.push(tree.right);
  }
  return res;
};