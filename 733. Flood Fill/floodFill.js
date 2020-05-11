/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image.length === 0) return image;
  let prevColor = image[sr][sc];
  var filler = function(r, c) {
      if (image[r][c] === prevColor) {
          image[r][c] = newColor;
          if (r + 1 < image.length) filler(r + 1, c);
          if (r - 1 >= 0) filler(r - 1, c);
          if (c + 1 < image[r].length) filler(r, c + 1);
          if (c - 1 >= 0) filler(r, c - 1);
      }
  }
  if (prevColor !== newColor) filler(sr, sc);
  return image;
};