/**
 * @param {string} params
 */

function validaParenteses(params) {
  const items = params.split("");
  const stack = [];

  for (let char of items) {
    if (char === "(") {
      stack.push("(");
    } else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length == 0;
}

function main() {
  const r = validaParenteses("(()()(()())())");
  console.log(r);
}

main();
