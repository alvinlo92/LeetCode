/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let ele = [];
  let minRow = minCol = 0;
  let maxRow = matrix.length - 1;
  let maxCol = matrix[0].length - 1;
  
  while (minRow <= maxRow && minCol <= maxCol) {
      for (let i = minCol; i <= maxCol; i++) {
          ele.push(matrix[minRow][i]);
      }
      minRow++;
      for (let j = minRow; j <= maxRow; j++) {
          ele.push(matrix[j][maxCol]);
      }
      maxCol--;
      if (minRow <= maxRow && minCol <= maxCol) {
          for (let k = maxCol; k >= minCol; k--) {
              ele.push(matrix[maxRow][k]);
          }
          maxRow--;
          for (let l = maxRow; l >= minRow; l--) {
              ele.push(matrix[l][minCol]);
          }
          minCol++;
      }
  }
  
  return ele;
};