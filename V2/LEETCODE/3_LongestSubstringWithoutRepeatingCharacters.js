/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const array = s.split("");

  let sequencia = 0;
  let Msequencia = 0;

  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (!map.get(array[i])) {
      const count = (map.get(array[i]) || 0) + 1;
      map.set(array[i], count);
      sequencia++;
    } else {
      if (Msequencia < sequencia) {
        Msequencia = sequencia;
        sequencia = 0;
      }
    }
  }
  return Msequencia;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // => 3
console.log(lengthOfLongestSubstring("bbbbb")); // => 1
console.log(lengthOfLongestSubstring("pwwkew")); // => 3
