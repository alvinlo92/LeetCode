/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  for (let row = 1; row < grid.length; row++) {
      grid[row][0] = grid[row][0] + grid[row - 1][0];
  }
  for (let col = 1; col < grid[0].length; col++) {
      grid[0][col] = grid[0][col] + grid[0][col - 1];
  }
  for (let row = 1; row < grid.length; row++) {
      for (let col = 1; col < grid[0].length; col ++) {
          grid[row][col] = grid[row][col] + Math.min(grid[row - 1][col], grid[row][col - 1]);
      }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};