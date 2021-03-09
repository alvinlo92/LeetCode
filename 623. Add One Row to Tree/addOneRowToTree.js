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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
 var addOneRow = function(root, v, d) {
  if (!root) return root;
  if (d === 1) return new TreeNode(v, root);
  let queue = [[root]];
  let depth = 1;
  while (queue.length) {
      let lvl = queue.pop();
      depth++;
      if (depth === d) {
          for (let i = 0; i < lvl.length; i++) {
              lvl[i].left = new TreeNode(v, lvl[i].left);
              lvl[i].right = new TreeNode(v, null, lvl[i].right);
          }
          return root;
      }
      let nextLvl = [];
      for (let i = 0; i < lvl.length; i++) {
          if (lvl[i].left) nextLvl.push(lvl[i].left);
          if (lvl[i].right) nextLvl.push(lvl[i].right);
      }
      if (nextLvl.length) queue.push(nextLvl);
  }
};