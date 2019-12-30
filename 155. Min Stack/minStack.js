/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) this.min[0] = x;
  if (this.getMin() >= x) this.min.splice(0, 0, x);
  this.stack.splice(this.stack.length, 0, x);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.getMin() === this.top()) this.min.splice(0, 1);
  this.stack.splice(this.stack.length - 1, 1)
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min[0];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/