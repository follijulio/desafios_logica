function main() {
  var array = [7, 9, 11, 13];

  var soma = somarPares(array);

  console.log(soma);
}

function somarPares(array) {
  let soma = 0;

  array.forEach((item) => {
    if (item % 2 == 0) {
      soma = soma + item;
    }
  });
  return soma;
}
main();
