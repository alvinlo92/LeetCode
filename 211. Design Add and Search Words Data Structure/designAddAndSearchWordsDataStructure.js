/**
 * Initialize your data structure here.
 */
 var WordDictionary = function() {
  this.root = {};
};

/**
* Adds a word into the data structure. 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
  }
  node.isEnd = true;
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  const search = function(node, i) {
      if (i === word.length && node.isEnd) return true;
      if (i === word.length) return false;
      if (word[i] === '.') {
          let keys = Object.keys(node);
          for (let key of keys) {
              if (search(node[key], i + 1)) return true;
          }
          return false;
      }
      if (!node[word[i]]) return false;
      return search(node[word[i]], i + 1);
  }
  return search(this.root, 0);
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/