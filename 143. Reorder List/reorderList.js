/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
/*
    I: singly linked list
    O: reordered linked list
    C: cannot modify head in-place
    E: if linked list length is 1 or 2, return linkedlist
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reorderList = function(head) {
  let values = [];
  let reorderVals = [];
  let list = head;

  if (head === null) {
      return [];
  }
  
  while (list.next !== null) {
      values.push(list.val);
      list = list.next;
      
      if (list.next === null) {
          values.push(list.val);
      }
  }

  let begIdx = 0;
  let endIdx = values.length - 1;
  
  while (endIdx >= begIdx) {
      reorderVals.push(values[begIdx]);
      if (begIdx !== endIdx) {
          reorderVals.push(values[endIdx]);
      }
      begIdx += 1;
      endIdx -= 1;
  }

  let nextNode = head;

  for (var i = 1; i < reorderVals.length; i++) {
      let node = new ListNode(reorderVals[i]);
      nextNode.next = node;
      nextNode = nextNode.next;
  }
  return head;
};
