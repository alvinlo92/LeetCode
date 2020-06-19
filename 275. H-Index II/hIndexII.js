/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let left = 0;
  let right = citations.length - 1;
  while (left <= right) {
      let mid = Math.ceil((left + right) / 2);
      let N = citations.length - mid;
      if (citations[mid] === N) return N;
      if (citations[mid] > N) {
          right = mid - 1;
      } else if (citations[mid] < N) {
          left = mid + 1;
      }
  }
  return citations.length - left;
};