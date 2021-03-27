/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  if (!head) return head;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  
  var reverse = function(head) {
      let prev = null;
      while (head !== null) {
          let temp = head.next;
          head.next = prev;
          prev = head;
          head = temp;
      }
      return prev;
  }
  
  slow = reverse(slow);
  fast = head;
  while (slow !== null) {
      if (slow.val !== fast.val) return false;
      slow = slow.next;
      fast = fast.next;
  }
  return true;
};