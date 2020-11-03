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
var insertionSortList = function(head) {
  if (!head) return head;
  let list = new ListNode();
  let cur = head;
  while (cur !== null) {
      let prevNode = list;
      let nextNode = list.next;
      while (nextNode !== null) {
          if (cur.val < nextNode.val) break;
          prevNode = nextNode;
          nextNode = nextNode.next;
      }
      let temp = cur.next;
      cur.next = nextNode;
      prevNode.next = cur;
      cur = temp;
  }
  return list.next;
};