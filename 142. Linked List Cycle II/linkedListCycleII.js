/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head) return null;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
      if (fast === null || fast.next === null || fast.next.next === null) return null;
      if (slow === fast) break;
      slow = slow.next;
      fast = fast.next.next;
  }
  let node = head;
  while (node !== slow) {
      if (node === slow) break;
      slow = slow.next;
      if (slow === fast) node = node.next;
  }
  return slow;
};