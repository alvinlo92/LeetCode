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
var preorderTraversal = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
      let tree = stack.pop();
      res.push(tree.val);
      if (tree.right) stack.push(tree.right);
      if (tree.left) stack.push(tree.left);
  }
  return res;
};