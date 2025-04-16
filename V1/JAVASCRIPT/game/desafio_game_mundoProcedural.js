function main() {
  gerarMundo(4);
}

function gerarMundo(n) {
  let meio = 0;
  if (n % 2 != 0) {
    meio = ((n + 1) / 2) - 1;
  }

  var mundo = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let y = 0; y < n; y++) {
      if (meio > 0 && i == meio && y == meio) {
        mundo[i][y] = "🏰";
      } else {
        mundo[i][y] = gerarCelula();
      }
    }
  }

  let linha = "";
  mundo.forEach((item) => {
    item.forEach((celula) => {
      linha = linha + celula + " ";
    });
    console.log(linha);
    linha = "";
    console.log();
  });
  console.log(mundo);
}

function gerarCelula() {
  const rng = Math.floor(Math.random() * 100) + 1;

  if (rng < 31) return "🌳";
  if (rng < 51) return "🏔";
  if (rng < 71) return "🌊";
  if (rng < 81) return "🏡";
  if(rng < 91) return "🛤"
  return gerarCelula()
}

main();
