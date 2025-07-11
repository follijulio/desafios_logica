/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const array = x.toString().split("");
  const reverse = array.slice().reverse();
  for (let i = 0; i < array.length; i++) {
    if (array[i] != reverse[i]) return false;
  }

  return true;
};

function main() {
  const x = 10;
  
  const array = x.toString().split("");
  const reverse = array.slice().reverse();

  console.log(array === reverse);
}

main();
