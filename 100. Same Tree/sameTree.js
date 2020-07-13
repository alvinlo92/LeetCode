/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let stack = [p, q];
  while (stack.length > 0) {
      let nodeQ = stack.pop();
      let nodeP = stack.pop();
      if (nodeQ === null && nodeP !== null || nodeQ !== null && nodeP === null) return false;
      if (nodeQ !== null && nodeP !== null) {
          if (nodeQ.val !== nodeP.val) return false;
          stack.push(nodeQ.right);
          stack.push(nodeP.right);
          stack.push(nodeQ.left);
          stack.push(nodeP.left);
      }
  }
  return true;
};