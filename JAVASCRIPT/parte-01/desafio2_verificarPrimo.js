function main() {
  var numero = 10;
  console.log(verificarPrimo(numero));
}

function verificarPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

main();
