/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let even = 0, odd = 0;
  for (let i of position) {
      i % 2 === 0 ? even++ : odd++;
  }
  return Math.min(odd, even);
};