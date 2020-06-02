/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length > 0) {
      let node = queue.shift();
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
  }
  return root;
};