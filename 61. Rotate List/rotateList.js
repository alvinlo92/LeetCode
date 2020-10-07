/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return head;
  if (k === 0) return head;
  let len = 0;
  let prev = head;
  let node = head;
  while (node.next) {
      prev = node;
      node = node.next;
      len++;
  }
  if (len > 0) {
      len++;
      k %= len;
      if (k === 0) return head;
  }
  if (prev !== node) {
      prev.next = null
      node.next = head;
  }
  return rotateRight(node, --k)
};