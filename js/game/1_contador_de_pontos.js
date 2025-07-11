/**
 * @param {number[]} acoes
 */

function calcularPontos(acoes) {
  const pontuacoes = [
    { pontuacao: 10, tipo: "coletou" },
    { pontuacao: 20, tipo: "inimigo derrotado" },
    { pontuacao: -5, tipo: "dano sofrido" },
    { pontuacao: 5, tipo: "cura" },
  ];

  let soma = 0;

  acoes.forEach((item) => {
    const ponto = pontuacoes.find((pontuacao) => pontuacao.tipo === item);

    soma += ponto ? ponto.pontuacao : 0;
  });

  return soma;
}


//funcionar mesmo hahahahahha 
function main() {
  const resultados = [];

  resultados.push(
    calcularPontos(["coletou", "inimigo derrotado", "dano sofrido"])
  );
  resultados.push(calcularPontos(["cura", "cura", "cura", "coletou"]));
  resultados.push(calcularPontos(["inimigo derrotado", "inimigo derrotado"]));
  resultados.push(
    calcularPontos(["coletou", "voou", "teleportou", "dano sofrido"])
  );
  resultados.push(
    calcularPontos([
      "coletou",
      "dano sofrido",
      "cura",
      "coletou",
      "inimigo derrotado",
    ])
  );

  //! ESPERADO 25, 25, 40, 5, 40
  console.log(resultados);
}
main();

