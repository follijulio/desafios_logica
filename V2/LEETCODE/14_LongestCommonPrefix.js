/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {

  if (strs.length < 1 && strs.length <= 200) return "";

  let prefix = strs[0];
  let a = "";

  strs.map((str) => {
    a = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === prefix[i]) {
        a += str[i];
      } else {
        prefix = a;
        break;
      }
    }
  });
  return prefix;
};

function main() {
  a = longestCommonPrefix(["miau", "miau", "mira"]);
  console.log(a);
}

main();
