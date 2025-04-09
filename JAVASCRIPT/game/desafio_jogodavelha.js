function marcar(array, posicaoX, posicaoY, jogador) {
  if (array[posicaoY][posicaoX] == undefined) {
    array[posicaoY][posicaoX] = jogador;
    return { array: array, sucess: true };
  }
  return { array: array, sucess: false };
}

function verificar(array) {
  //HORIZONTAL E VERTICAL
  for (let i = 0; i < 3; i++) {
    if (
      array[i][0] === array[i][1] &&
      array[i][1] === array[i][2] &&
      array[i][2] !== undefined
    )
      return true;
    if (
      array[0][i] === array[1][i] &&
      array[1][i] === array[2][i] &&
      array[2][1] !== undefined
    )
      return true;
  }

  //TRANSVERSAL
  if (
    array[0][0] === array[1][1] &&
    array[1][1] === array[2][2] &&
    array[2][2] !== undefined
  )
    return true;
  if (
    array[0][2] === array[1][1] &&
    (array[1][1] === array[2][0]) & (array[2][0] !== undefined)
  )
    return true;

  return false;
}

function main() {
  var jogo = new Array(3).fill().map(() => new Array(3).fill());
}

main();
