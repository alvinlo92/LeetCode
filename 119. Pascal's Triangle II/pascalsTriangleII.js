/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let pascal = [];
  for (let i = 0; i < rowIndex + 1; i++) {
      let row = [i];
      row[0] = 1;
      row[i] = 1;
      for (let j = 1; j < i; j++) {
          row[j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
      }
      pascal.push(row);
  }
  return pascal[rowIndex];
};