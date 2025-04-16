/**
 * @param {number[]} array
 *
 */

function somaElementos(array) {
  let soma = 0;
  array.forEach((item) => {
    soma += item;
  });
  console.log(soma)
}

function main() {
  somaElementos([1, 2, 3, 4, 5]);
  somaElementos([10]);
  somaElementos([]);
  somaElementos([100, 200, 300]);
  somaElementos([-5, 5, -10, 10]);
  
  console.log("tempo: O(n)")
  console.log("tempo: O(1)")
}

main();
