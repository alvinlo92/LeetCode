/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let start = 0; start < s.length; start++) {
      for (let end = start + 1; end < s.length + 1; end++) {
          if (dp[end]) continue;
          let word = s.substring(start, end);
          if (wordDict.includes(word) && dp[start]) {
              dp[end] = true;
          }
      }
  }
  return dp[s.length];
};