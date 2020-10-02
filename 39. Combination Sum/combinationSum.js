/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  
  var backtrack = function(combination, remainder, i) {
      if (i >= candidates.length || remainder < 0) return;
      if (remainder === 0) return res.push([...combination]);
      
      combination.push(candidates[i]);
      backtrack(combination, remainder - candidates[i], i);
      combination.pop();
      backtrack(combination, remainder, ++i);
  };
  
  backtrack([], target, 0);
  return res;
};