function main() {
  const isPalindromo = descobrirPalindromo(2);
  console.log(isPalindromo);
}

function descobrirPalindromo(n) {
  const string = n.toString();

  const array = string.split("");
  const reverseArray = array.slice().reverse();

  for (let i = 0; i < array.length; i++) {
    if (array[i] != reverseArray[i]) {
      return false;
      break;
    }
  }
  return true;
}

main();
