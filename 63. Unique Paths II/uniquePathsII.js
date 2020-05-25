/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  obstacleGrid[0][0] = 1;
  for (let row = 1; row < obstacleGrid.length; row++) {
      if (obstacleGrid[row][0] === 0) {
          if (obstacleGrid[row - 1][0] === 1) obstacleGrid[row][0] = 1
      } else {
          obstacleGrid[row][0] = 0
      }
  }
  for (let col = 1; col < obstacleGrid[0].length; col++) {
      if (obstacleGrid[0][col] === 0) {
          if (obstacleGrid[0][col - 1] === 1) obstacleGrid[0][col] = 1
      } else {
          obstacleGrid[0][col] = 0;
      }
  }
  for (let row = 1; row < obstacleGrid.length; row++) {
      for (let col = 1; col < obstacleGrid[row].length; col++) {
          if (obstacleGrid[row][col] === 1) {
              obstacleGrid[row][col] = 0;
          } else {
              obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1];
          }
      }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[obstacleGrid.length - 1].length - 1];
};