/**
 * @param {number[]} w
 */
var Solution = function(w) {
  let weights = [];
  let cnt = -1;
  for (let i = 0; i < w.length; i++) {
      cnt += w[i];
      weights.push(cnt);
  }
  this.weights = weights;
  this.cnt = cnt + 1;
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
  if (this.weights.length === 1) return 0; 
  let pick = Math.floor(Math.random() * this.cnt);
  let left = 0;
  let right = this.weights.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (this.weights[mid] === pick) {
          return mid;
      } else if (this.weights[mid] < pick) {
          left = mid + 1;
      } else {
          if (mid === 0 || this.weights[mid - 1] < pick) return mid;
          right = mid;
      }
  }
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/