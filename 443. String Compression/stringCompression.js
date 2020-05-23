/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let char = chars[0];
  let cnt = 1;
  let prev = 1;
  for (let i = 1; i < chars.length; i++) {
      if (char === chars[i]) {
          cnt++;
          if (char !== chars[i + 1]) {
              let str = cnt + "";
              for (let j = 0; j < str.length; j++) {
                  chars[prev] = str[j];
                  prev++;
              }
              chars.splice(prev, cnt - str.length - 1)
              i = prev - 1;
          }
      } else {
          char = chars[i];
          cnt = 1;
          prev = i + 1;
      }
  }
  return chars.length;
};