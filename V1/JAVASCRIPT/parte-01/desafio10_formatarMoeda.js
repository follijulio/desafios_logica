function main() {
  var valor = 1000.5;
  var reais = transformar(valor);

  console.log(reais);
}

function transformar(valor) {
  var reais = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
  return reais;
}

main();
