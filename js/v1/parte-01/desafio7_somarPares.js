function main() {
  var array = [7, 4, 44, 4, 4];

  var soma = somarPares(array);

  console.log(soma);
}

function somarPares(array) {
  return array.reduce((a, b) => (b % 2 == 0 ? a + b : 0), 0);
}
main();
