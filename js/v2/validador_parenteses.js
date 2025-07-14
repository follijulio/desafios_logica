/**
 * @param {string} params
 */

function validaParenteses(params) {
  const items = params.split("");
  let l = 0;
  let r = 0;

  for (i in items) {
    if (items[i] === "(") {
      l += 1;
    } else {
      if (i == 0) {
        return false;
      } else {
        r += 1;
      }
    }
  }
  if (r !== l) return false;

  return true;
}

function main() {
  const r = validaParenteses(")");
  console.log(r);
}

main();
