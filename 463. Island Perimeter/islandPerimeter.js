/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let peri = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {                
              if (grid[i - 1] === undefined || grid[i - 1][j] === 0) peri++;
              if (grid[i][j + 1] === undefined || grid[i][j + 1] === 0) peri++;
              if (grid[i + 1] === undefined || grid[i + 1][j] === 0) peri++;
              if (grid[i][j - 1] === undefined || grid[i][j - 1] === 0) peri++;
          }
      }
  }
  return peri;
};