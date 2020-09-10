/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let hash = {};
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i++) {
      hash[secret[i]] ? hash[secret[i]] += 1 : hash[secret[i]] = 1;
  }
  for (let i = 0; i < guess.length; i++) {
      if (secret[i] === guess[i]) {
          bulls += 1;
      }
      if (hash[guess[i]]) {
          hash[guess[i]] -= 1;
          cows += 1;
      }
  }
  return `${bulls}A${cows - bulls}B`;
};