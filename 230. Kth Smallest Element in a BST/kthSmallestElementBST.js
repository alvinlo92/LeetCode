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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let vals = [];
  let queue = [[root]];
  while (queue.length > 0) {
      let nodes = queue.shift();
      let nextLevel = [];
      for (let i = 0; i < nodes.length; i++) {
          vals.push(nodes[i].val);
          if (nodes[i].left) nextLevel.push(nodes[i].left);
          if (nodes[i].right) nextLevel.push(nodes[i].right);
      }
      if (nextLevel.length > 0) queue.push(nextLevel);
  }
  vals.sort((a, b) => a - b);
  return vals[k - 1];
};