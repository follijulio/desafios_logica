/**
 *
 * @param {number[]} posicao
 * @param {string} movimento
 *
 */
const possiveisMovimentos = {
  cima: function (x, y) {
    return [x, y + 1];
  },
  baixo: function (x, y) {
    return [x, y - 1];
  },
  esquerda: function (x, y) {
    return [x - 1, y];
  },
  direita: function (x, y) {
    return [x + 1, y];
  },
};


// * Mover uma posição em uma grade bidimensional. FUNCIONA
function mover(posicao, movimento) {
  const [x, y] = posicao;

  if (!possiveisMovimentos[movimento]) return posicao;

  return possiveisMovimentos[movimento](x, y);
}

function main() {
  const posicoes = [];
  posicoes.push(mover([0, 0], "cima"));
  posicoes.push(mover([5, 5], "baixo"));
  posicoes.push(mover([3, 2], "direita"));
  posicoes.push(mover([1, 1], "esquerda"));
  posicoes.push(mover([10, 10], "cair"));

  posicoes.forEach((item) => {
    console.log(item);
  });
}

main();
