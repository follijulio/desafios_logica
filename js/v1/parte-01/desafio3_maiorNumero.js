function main() {
  var arrayInicial = [-10, -3, -1];

  var maior = descobrirMaior(arrayInicial);
  console.log(maior);
}
function descobrirMaior(array) {
  return Math.max(...array);
}

main();
