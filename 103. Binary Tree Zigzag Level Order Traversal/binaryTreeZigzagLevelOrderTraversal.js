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
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let queue = [[root]];
  let vals = [[root.val]];
  while (queue.length) {
      let lvl = queue.shift();
      let nextLvl = [];
      let nextVals = [];
      for (let i = 0; i < lvl.length; i++) {
          if (lvl[i].left) {
              nextLvl.push(lvl[i].left);
              nextVals.push(lvl[i].left.val);
          }
          if (lvl[i].right) {
              nextLvl.push(lvl[i].right);
              nextVals.push(lvl[i].right.val);
          }
      }
      if (nextLvl.length) {
          queue.push(nextLvl);
          vals.length % 2 === 0 ? vals.push(nextVals) : vals.push(nextVals.reverse());
      }
  }
  return vals;
};