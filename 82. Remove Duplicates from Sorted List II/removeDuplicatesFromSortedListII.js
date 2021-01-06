/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let list = new ListNode();
  let node = list;
  while (head) {
      if (head.next === null) {
          node.next = new ListNode(head.val);
      } else if (head.val === head.next.val) {
          while (head.next !== null && head.val === head.next.val) {
              head = head.next;
          }
      } else {
          node.next = new ListNode(head.val);
          node = node.next;
      }
      head = head.next;
  }
  return list.next;
};