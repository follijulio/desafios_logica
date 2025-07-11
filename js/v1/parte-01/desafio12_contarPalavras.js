function main() {
  const frase = "";

  const palavras = contarPalavras(frase);

  console.log(palavras);
}

function contarPalavras(frase) {
  if (frase === "") return 0;

  let arrayPalavras = frase.split(" ");
  console.log(arrayPalavras);
  return arrayPalavras.length;
}

main();
