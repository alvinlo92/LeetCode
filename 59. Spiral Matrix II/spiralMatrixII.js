/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
      matrix.push([]);
  }
  let num = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let dir = 0;
  while (num <= n * n) {
      if (dir === 0) {
          for (let i = startCol; i <= endCol; i++) {
              matrix[startRow][i] = num++;
          }
          startRow++;
      } else if (dir === 1) {
          for (let i = startRow; i <= endRow; i++) {
              matrix[i][endCol] = num++;
          }
          endCol--;
      } else if (dir === 2) {
          for (let i = endCol; i >= startCol; i--) {
              matrix[endRow][i] = num++;
          }
          endRow--;
      } else if (dir === 3) {
          for (let i = endRow; i >= startRow; i--) {
              matrix[i][startCol] = num++;
          }
          startCol++;
      }
      dir = (dir + 1) % 4;
  }
  return matrix;
};