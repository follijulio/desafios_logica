function main() {
  var matriz = [
    [10, 21],
    [30, 43],
    [50, 2],
  ];

  const maior = descobrirMaiorMatriz(matriz);

  console.log(maior);
}
function descobrirMaiorMatriz(matriz) {
  let maior = 0;

  matriz.forEach((item) => {
    item.forEach((item) => {
      if (maior < item) maior = item;
    });
  });
  return maior;
}

main();
