/**
 *
 * @param {[]} arr1
 * @param {[]} arr2
 *
 */

/**
 *
 * -------- LOOPS --------
 *! complexidade temporal: O(N * M)
 *! complexidade de espaço: O(1)
 *
 *? Não há criação de nenhum novo espaço
 *
 * -------- SET --------
 *! complexidade temporal: O(N+M)
 *! complexidade espacial: O(N)
 *
 * ------------------------------------
 *? N => tamanho do array 1
 *? M => tamanho do array 2
 *
 */

function temElementoComumSet(arr1, arr2) {
  const elementosArray1 = new Set(arr1);

  for (const elemento of arr2) {
    if (elementosArray1.has(elemento)) {
      return true;
    }
  }
  return false;
}

function temElementoComumLoop(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[i] == arr2[y]) {
        return true;
      }
    }
  }
  return false;
}

function temElementoComum(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }

  const respostaLoop = temElementoComumLoop(arr1, arr2);
  const respostaSet = temElementoComumSet(arr1, arr2);

  //? objeto resposta
  return {
    elementos: { array1: arr1, array2: arr2 },
    usandoLoop: respostaLoop,
    usandoSet: respostaSet,
  };
}

function main() {
  console.log(temElementoComum([1, 2, 3], [4, 5, 6]));
  console.log(temElementoComum([1, 2, 3], [3, 4, 5]));
  console.log(temElementoComum([10, 20, 30], [30, 40, 50]));
  console.log(temElementoComum([99, 100], [1, 2, 3]));
  console.log(temElementoComum([], [1, 2, 3]));
}

main();
