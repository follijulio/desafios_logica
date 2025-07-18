/**
 * @param {string} str
 */

function inverterString(str) {
  return str.split("").reverse().join("")
}

function main() {
  const r = inverterString("null");
  console.log(r);
}
main();
