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
var minDepth = function(root) {
  if (!root) return 0;
  let min = Number.MAX_SAFE_INTEGER;
  let depth = 1;
  let queue = [[root]];
  while (queue.length > 0) {
      let lvl = queue.pop();
      let nextLvl = [];
      for (let i = 0; i < lvl.length; i++) {
          if (!lvl[i].left && !lvl[i].right) min = Math.min(min, depth);
          if (lvl[i].left) nextLvl.push(lvl[i].left);
          if (lvl[i].right) nextLvl.push(lvl[i].right);
      }
      if (nextLvl.length) queue.push(nextLvl);
      depth++;
  }
  return min;
};