/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let cnt = 0;
  
  var convertIsland = function(x, y) {
      grid[x][y] = "x";
      if (x - 1 >= 0 && grid[x - 1][y] === "1") convertIsland(x - 1, y);
      if (x + 1 < grid.length && grid[x + 1][y] === "1") convertIsland(x + 1, y);
      if (y - 1 >= 0 && grid[x][y - 1] === "1") convertIsland(x, y - 1);
      if (y + 1 < grid[0].length && grid[x][y + 1] === "1") convertIsland(x, y + 1);
  }
  
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
          if (grid[row][col] === "1") {
              cnt++;
              convertIsland(row, col);
          }
      }
  }
  
  return cnt;
};