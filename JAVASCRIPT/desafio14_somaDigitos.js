function main() {
  const numero = 56;
  const soma = somaDigitos(numero);
  console.log(soma);
}

function somaDigitos(numero) {
  var numeral = numero.toString();
  var arrayNumeros = numeral.split("").map(Number);
  return arrayNumeros.reduce((a, b) => a + b, 0);
}

main();
