/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let binary = N.toString(2);
  let str = "";
  for (let i = 0; i < binary.length; i++) {
      binary[i] === "0" ? str += "1" : str += "0";
  }
  return parseInt(str, 2);
};