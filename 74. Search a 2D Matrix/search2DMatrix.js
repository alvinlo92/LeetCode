/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0;
  let right = row * col - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let x = Math.floor(mid / col);
      let y = mid % col;
      if (target === matrix[x][y]) return true;
      if (target > matrix[x][y]) left = mid + 1;
      if (target < matrix[x][y]) right = mid - 1;
  }
  return false;
};