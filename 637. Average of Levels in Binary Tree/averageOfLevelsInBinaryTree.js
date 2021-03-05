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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
  if (!root) return [];
  let ans = [];
  let stack = [[root]];
  while (stack.length > 0) {
      let avg = 0;
      let lvl = stack.pop();
      let nextLvl = [];
      for (let node of lvl) {
          avg += node.val;
          if (node.left) nextLvl.push(node.left);
          if (node.right) nextLvl.push(node.right);
      }
      if (nextLvl.length) stack.push(nextLvl);
      ans.push (avg / lvl.length);
  }
  return ans;
};