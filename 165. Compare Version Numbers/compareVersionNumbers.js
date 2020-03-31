/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  let len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
      let num1 = parseInt(arr1[i]);
      let num2 = parseInt(arr2[i]);
      if (!num1) num1 = 0;
      if (!num2) num2 = 0;
      if (num1 > num2) return 1;
      if (num1 < num2) return -1;
  }
  return 0;
};