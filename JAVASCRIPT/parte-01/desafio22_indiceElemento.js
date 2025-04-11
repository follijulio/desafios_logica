function main() {
  var array = [10, 20, 30];

  console.log(encontrarElemento([1, 2, 3], 4));
}

function encontrarElemento(array, elemento) {
  let existe = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elemento) {
      existe = i;
      break;
    }
  }
  return existe;
}

main();
