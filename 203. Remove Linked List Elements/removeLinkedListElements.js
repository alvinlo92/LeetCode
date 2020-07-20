/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while (head !== null && head.val === val) {
      head = head.next;
  }
  let cur = head;
  let prev;
  while (cur !== null) {
      cur.val === val ? prev.next = cur.next : prev = cur;
      cur = cur.next;
  }
  return head;
};