function main() {
  const resultado = rolarDado(10);
  console.log(resultado);
}

function rolarDado(n) {
  return Math.floor(Math.random() * n) + 1;
}

main();
