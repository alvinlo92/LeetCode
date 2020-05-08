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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  if (!root) return false;
  let queue = [[root, null, 0]], found;
  while (queue.length > 0) {
      let node = queue.shift();
      if (node[0].val === x || node[0].val === y) {
          if (!found) {
              found = node;
          } else {
              if (node[1] !== found[1] && node[2] === found[2]) return true;
          }
      }
      if (node[0].left !== null) queue.push([node[0].left, node[0].val, node[2] + 1]);
      if (node[0].right !== null) queue.push([node[0].right, node[0].val, node[2] + 1]);
  }
  return false;
};