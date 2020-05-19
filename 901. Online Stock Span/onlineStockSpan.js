
var StockSpanner = function() {
  this.stocks = [];
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  this.stocks.push(price);
  let days = 0;
  for (let i = this.stocks.length - 1; i >= 0; i--) {
      if (price >= this.stocks[i]) {
          days++;
      } else {
          break;
      }
  }
  return days;
};

/** 
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/