/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix[i].length; j++) {
          let current = matrix[i][j];
          let change = matrix[j][i];
          matrix[i][j] = change;
          matrix[j][i] = current;
      }
  }
  
  let halfLen = Math.floor(matrix.length / 2);
  
  for (let k = 0; k < matrix.length; k++) {
      for (l = 0; l < halfLen; l++) {
          let current = matrix[k][l]
          let change = matrix[k][matrix.length - l - 1];
          matrix[k][l] = change;
          matrix[k][matrix.length - l - 1] = current;
      }
  }
  
  return matrix;
};