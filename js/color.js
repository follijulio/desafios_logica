function getFaixa(valor, maximo) {
  if (valor <= 0) return 0;
  return Math.ceil((valor / maximo) * 10);
}

function corPorFaixa(faixa) {
  const azulClaros = [
    "#e9f5ff",
    "#d0e7ff",
    "#b7daff",
    "#9ecbfe",
    "#85bcfd",
    "#6aabfb",
    "#5197f6",
    "#367fe7",
    "#165fd5",
    "#0038a8",
  ];
  if (faixa === 0) return "#cccccc";
  return azulClaros[Math.max(0, Math.min(9, faixa - 1))];
}

function calcularCor(uf, dados) {
  let maximo = 0;
  let valor = 0;
  for (const item of dados) {
    if (item.valor > maximo) maximo = item.valor;
    if (item.uf === uf) valor = item.valor;
  }
  const faixa = getFaixa(valor, maximo);
  return corPorFaixa(faixa);
}

function main() {
  const dados = [
    { uf: "SP", valor: 100 },
    { uf: "RJ", valor: 50 },
    { uf: "MG", valor: 70 },
    { uf: "ES", valor: 0 },
  ];

  const uf = "RJ";
  const cor = calcularCor(uf, dados);
  console.log(`A cor para ${uf} é ${cor}`);
}

main();
