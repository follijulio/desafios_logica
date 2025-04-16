function main() {
  console.log(exibirVida(100, 100));
  console.log(exibirVida(25, 100));
  console.log(exibirVida(75, 100));
}

function exibirVida(vidaAtual, vidaMaxima) {
  if (vidaAtual > vidaMaxima) {
    return "- I - M - P - O - S - S - Í - V - E - L -";
  }

  let porcentagem = Math.trunc(((vidaMaxima / 100) * vidaAtual) / 5);

  let texto = "";

  for (let i = 1; i < 20; i++) {
    if (porcentagem > 0) {
      texto = texto + "█";
      porcentagem--;
    } else {
      texto = texto + "-";
    }
  }
  return texto;
}

main();
