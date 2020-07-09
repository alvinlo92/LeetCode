/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (!root) return 0;
  let max = 1;
  let queue = [[root]];
  while (queue.length) {
      let lvl = queue.shift();
      let nextLvl = [];
      for (let i = 0; i < lvl.length; i++) {
          lvl[i] === null ? nextLvl.push(null, null) : nextLvl.push(lvl[i].left, lvl[i].right);
      }
      while (nextLvl[0] === null) {
          nextLvl.splice(0, 1);
      }
      while (nextLvl[nextLvl.length - 1] === null) {
          nextLvl.splice(nextLvl.length - 1, 1);
      }
      max = Math.max(max, nextLvl.length);
      if (nextLvl.length > 0) queue.push(nextLvl);
  }
  return max;
};