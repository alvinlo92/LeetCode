/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  if (A.length < 3) return 0;
  let longest = 0;
  for (let slow = 0; slow < A.length; slow++) {
      let fast = slow + 1;
      if (A[slow] < A[fast]) {
          let down = false;
          while (A[fast] < A[fast + 1]) {
              fast++;
          }
          while (A[fast] > A[fast + 1]) {
              fast++;
              down = true;
          }
          if (down && fast - slow + 1 >= 3) longest = Math.max(fast - slow + 1, longest);
      }
      slow = fast - 1;
  }
  return longest;
};