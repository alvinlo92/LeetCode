/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let even = [];
  let odd = [];
  A.forEach(num => num % 2 === 0 ? even.push(num) : odd.push(num));
  return even.concat(odd);
};