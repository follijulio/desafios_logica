function main() {
  const array = [1, 2, 3, 4, 5, 6];
  const objeto = imparPar(array);
  console.log(objeto);
}

function imparPar(array) {
  const arrayPar = [];
  const arrayImpar = [];
  array.forEach((numero) => {
    numero % 2 == 0 ? arrayPar.push(numero) : arrayImpar.push(numero);
  });

  return { pares: arrayPar, impares: arrayImpar };
}

main();
