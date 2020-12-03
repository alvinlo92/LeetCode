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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  if (!root) return root;
  let nums = [];
  let stack = [root];
  while (stack.length) {
      let node = stack.pop();
      nums.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
  }
  nums.sort((a, b) => a - b);
  let newRoot = new TreeNode(nums[0]);
  let branch = newRoot;
  for (let i = 1; i < nums.length; i++) {
      branch.right = new TreeNode(nums[i]);
      branch = branch.right;
  }
  return newRoot;
};