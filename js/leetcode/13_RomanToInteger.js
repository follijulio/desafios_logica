/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const romansValues = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  let value = 0;

  const array = s.toLowerCase().split("");
  for (let i = 0; i < array.length; i++) {
    if (
      (romansValues[array[i]] === 10 ** 0 ||
        romansValues[array[i]] === 10 ** 1 ||
        romansValues[array[i]] === 10 ** 2 ||
        romansValues[array[i]] === 10 ** 3) &&
      romansValues[array[i + 1]] > romansValues[array[i]]
    ) {
      value -= romansValues[array[i]];
    } else {
      value += romansValues[array[i]];
    }
  }

  return value;
};

function main() {
  console.log(romanToInt("IV") == 4);
  console.log(romanToInt("VI") == 6);
  console.log(romanToInt("LXXX") == 80);
  console.log(romanToInt("XC") == 90);
}

main();
