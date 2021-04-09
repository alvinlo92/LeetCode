/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  let hash = {};
  for (let i = 0; i < order.length; i++) {
      hash[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if (j >= words[i + 1].length) return false;
          if (hash[words[i][j]] !== hash[words[i + 1][j]]) {
              if (hash[words[i][j]] > hash[words[i + 1][j]]) {
                  return false;
              } else {
                  break;
              }
          }
      }
  }
  return true;
};