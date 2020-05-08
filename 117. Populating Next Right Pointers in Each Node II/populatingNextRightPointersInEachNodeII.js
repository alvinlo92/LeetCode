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
  if (!root) return null;
  let queue = [[root, 0]];
  while (queue.length > 0) {
      let node = queue.shift();
      if (queue.length > 0 && queue[0][1] === node[1]) node[0].next = queue[0][0];
      if (node[0].left !== null) queue.push([node[0].left, node[1] + 1]);
      if (node[0].right !== null) queue.push([node[0].right, node[1] + 1]);
  }
  return root;
};