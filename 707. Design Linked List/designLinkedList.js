/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
  this.head = null;
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  let node = this.head;
  let i = 0;
  while (i < index && node.next !== null) {
      node = node.next;
      i++;
  }
  return i === index ? node.val : -1;
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let node = {val: val, next: null};
  node.next = this.head;
  this.head = node;
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  if (this.head === null) {
      this.head = {val: val, next: null};
  } else {
      let node = this.head;
      while (node.next !== null) {
          node = node.next;
      }
      node.next = {val: val, next: null};
  }
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) return this.addAtHead(val);
  let prev = this.head;
  let cur = this.head;
  let i = 0;
  while (i < index && cur !== null) {
      prev = cur;
      cur = cur.next;
      i++;
  }
  if (i === index) {
      let node = {val: val, next: cur};
      prev.next = node;
  }
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index === 0) {
      this.head = this.head.next;
  } else {
      let prev = this.head;
      let cur = this.head;
      let i = 0;
      while (i < index && cur.next !== null) {
          prev = cur;
          cur = cur.next;
          i++;
      }
      if (i === index) prev.next = cur.next;
  }
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/