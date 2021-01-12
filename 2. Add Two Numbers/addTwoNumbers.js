/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let list = new ListNode();
  let node = list;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
      let sum;
      if (l1 === null) {
          sum = l2.val + carry;
          l2 = l2.next;
      } else if (l2 === null) {
          sum = l1.val + carry;
          l1 = l1.next;
      } else {
          sum = l1.val + l2.val + carry;
          l1 = l1.next;
          l2 = l2.next;
      }
      carry = Math.floor(sum / 10);
      node.next = new ListNode(sum % 10);
      node = node.next;
  }
  if (carry > 0) node.next = new ListNode(carry);
  return list.next;
};