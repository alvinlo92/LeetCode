/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [[root]];
  let vals = [];
  while (queue.length > 0) {
      let curLvl = queue.shift();
      let nextLvl = [];
      let val = [];
      for (let i = 0; i < curLvl.length; i++) {
          val.push(curLvl[i].val);
          if (curLvl[i].left !== null) nextLvl.push(curLvl[i].left);
          if (curLvl[i].right !== null) nextLvl.push(curLvl[i].right);
      }
      if (nextLvl.length !== 0) queue.push(nextLvl);
      if (val.length !== 0) vals.push(val);
  }
  return vals;
};