function main() {
  var palavra = "radar";
  var palindromo = verificarPalindromo(palavra);

  console.log(palindromo);
}

function verificarPalindromo(palavra) {
  var original = palavra.split("");

  var invertido = original.slice().reverse();

  for (let i = 0; i < original.length; i++) {
    if (original[i] != invertido[i]) {
      return false;
    }
  }
  return true;
}

main();
