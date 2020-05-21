/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let cnt = 0;
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
          if (row > 0 && col > 0 && matrix[row][col] > 0) {
              matrix[row][col] = Math.min(matrix[row - 1][col], matrix[row][col - 1], matrix[row - 1][col - 1]) + 1
          }
          cnt += matrix[row][col];
      }
  }
  return cnt;
};