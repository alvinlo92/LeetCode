/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let list = new ListNode();
  list.next = head;
  let first = list;
  let second = list;
  for (let i = 1; i <= n + 1; i++) {
      first = first.next;
  }
  while (first !== null) {
      first = first.next;
      second = second.next;
  }
  second.next = second.next.next;
  return list.next;
};