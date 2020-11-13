/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root;
  let queue = [[root]];
  while (queue.length) {
      let lvl = queue.shift();
      let nextLvl = [];
      for (let i = 0; i < lvl.length; i++) {
          i + 1 > lvl.length ? lvl[i].next = null : lvl[i].next = lvl[i + 1];
          if (lvl[i].left) nextLvl.push(lvl[i].left);
          if (lvl[i].right) nextLvl.push(lvl[i].right);
      }
      if (nextLvl.length) queue.push(nextLvl);
  }
  return root;
};