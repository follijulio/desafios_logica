//! o mais difícil até agora

function main() {
  const array = [1, 3, 3, 7, 3, 2, 2, 2];
  const resultado = elementoMaisFrequente(array);
  console.log(resultado);
}

function elementoMaisFrequente(array) {
  const frequencias = new Map();
  let maxContagem = 0;
  let maisFrequente = null;

  array.forEach((item) => {
    const count = (frequencias.get(item) || 0) + 1;
    frequencias.set(item, count);
    if (count > maxContagem) {
      maxContagem = count;
      maisFrequente = item;
    }
  });
  return maisFrequente;
}

main();
