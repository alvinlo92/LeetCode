/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  let vals = [];
  let stack = [root];
  while (stack.length) {
      let node = stack.pop();
      if (node) {
          vals.push(node.val);
          stack.push(node.right);
          stack.push(node.left);
      } else {
          vals.push(null);
      }
  }
  return vals;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if (!data.length) return null;
  let val = data.shift();
  if (val === null) return null; 
  let node = new TreeNode(val);
  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/