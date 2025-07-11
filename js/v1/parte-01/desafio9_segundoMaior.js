function main() {
  var numeros = [1,2,3,4,5];

  var segundo = segundoMaior(numeros);

  console.log(segundo);
}
function segundoMaior(array) {
  var maior = Math.max(...array);

  var segundo = 0;
  array.forEach((numero) => {
    if (numero > segundo && numero < maior) {
      segundo = numero;
    }
  });
  return segundo != 0 ? segundo : null;
}
main();
