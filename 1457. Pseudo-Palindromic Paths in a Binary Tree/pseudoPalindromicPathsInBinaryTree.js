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
var pseudoPalindromicPaths  = function(root) {
  let cnt = 0;
  let arr = new Array(10).fill(0);
  
  var helper = function(node, vals) {
      if (!node) return;
      vals = [...vals];
      vals[node.val] += 1;
      if (!node.left && !node.right) {
          let odd = 0;
          vals.forEach((num) => {
              if (num % 2 !== 0) odd++
          });
          if (odd <= 1) cnt++;
      }
      helper(node.left, vals);
      helper(node.right, vals);
  }
  
  helper(root, arr);
  return cnt;
};