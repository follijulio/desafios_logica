function main() {
  const numero = 3;
  const binario = transformarBinario(numero);
  console.log(binario);
}

function transformarBinario(numero) {
  return numero.toString(2);
}

main();
