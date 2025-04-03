function main() {
  const n = 20;
  const primos = descobrirPrimos(n);
  console.log(primos);
}

function descobrirPrimos(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if (verificarPrimo(i)) {
      array.push(i);
    }
  }
  return array;
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
