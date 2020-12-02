/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let str = '';
  let hash = {};
  for (let i = 0; i < chars.length; i++) {
      hash[chars[i]] ? hash[chars[i]]++ : hash[chars[i]] = 1;
  }
  for (let word of words) {
      let obj = {...hash};
      let good = true;
      for (let i = 0; i < word.length; i++) {
          if (obj[word[i]]) {
              obj[word[i]]--;
          } else {
              good = false;
              break;
          }
      }
      if (good) str += word;
  }
  return str.length;
};