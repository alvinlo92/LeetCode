/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  S = S.split(' ');
  let vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
  let ending = 'a';
  for (let i = 0; i < S.length; i++) {
      vowels.has(S[i][0]) ? S[i] += "ma" + ending : S[i] = S[i].slice(1) + S[i][0] + "ma" + ending;
      ending += 'a';
  }
  return S.join(' ');
};