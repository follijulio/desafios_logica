function main() {
  var palavra = "rhythm";

  var minuscula = palavra.toLowerCase();

  var array = minuscula.split("");

  var numeroVogais = contarIncidencia(array);

  console.log(numeroVogais);
}

function contarIncidencia(array) {
  var vogais = ["a", "e", "i", "o", "u"];

  let numeroVogais = 0;

  array.map((item) => {
    vogais.map((vogal) => {
      if (item === vogal) numeroVogais++;
    });
  });
  return numeroVogais;
}

main();
