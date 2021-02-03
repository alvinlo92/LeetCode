/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (fast !== null) {
      if (slow.val === fast.val) return true;
      slow = slow.next;
      fast = fast.next !== null ? fast.next.next : fast.next;
  }
  return false;
};