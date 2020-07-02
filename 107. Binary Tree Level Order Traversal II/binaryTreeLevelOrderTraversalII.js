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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  let ans = [];
  let queue = [[root]];
  while (queue.length > 0) {
      let lvl = queue.shift();
      let vals = [];
      let nextLvl = [];
      for (let i = 0; i < lvl.length; i++) {
          vals.push(lvl[i].val);
          if (lvl[i].left !== null) nextLvl.push(lvl[i].left);
          if (lvl[i].right !== null) nextLvl.push(lvl[i].right);
      }
      if (nextLvl.length > 0) queue.push(nextLvl);
      if (vals.length > 0) ans.unshift(vals);
  }
  return ans;
};