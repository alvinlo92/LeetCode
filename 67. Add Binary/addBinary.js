/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = '';
  let carry = 0;
  let aIdx = a.length - 1;
  let bIdx = b.length - 1;
  while (aIdx >= 0 || bIdx >= 0) {
      let add = (parseInt(a[aIdx]) || 0) + (parseInt(b[bIdx]) || 0) + carry;
      carry = 0;
      res = add % 2 + res;
      if (add >= 2) carry = 1
      aIdx--;
      bIdx--;
  }
  if (carry === 1) res = carry + res;
  return res;
};