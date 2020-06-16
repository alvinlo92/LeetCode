/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (IP.includes('.')) {
      let arr = IP.split('.');
      if (arr.length !== 4) return "Neither";
      for (let i = 0; i < arr.length; i++) {
          if (parseInt(arr[i]) > 255 || parseInt(arr[i]) < 0 || arr[i] !== parseInt(arr[i]).toString()) return "Neither";
      }
      return "IPv4";
  }
  if (IP.includes(':')) {
      let arr = IP.split(':');
      if (arr.length !== 8) return "Neither";
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].length > 4 && arr[i] !== "0" || arr[i].length === 0) return "Neither";
          for (let char of arr[i]) {
              if (isNaN(parseInt(char, 16))) return "Neither";
          }
      }
      return "IPv6";
  }
  return "Neither";
};