/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let num = 0;
  let hash = {};
  for (let i = 0; i < J.length; i++) {
      hash[J[i]] = true;
  }
  for (let j = 0; j < S.length; j++) {
      if (hash[S[j]]) num++;
  }
  return num;
};