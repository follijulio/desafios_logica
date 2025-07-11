function main() {
  intercalar([1, 2, 3], ["a", "b", "c"]);
}

function intercalar(array1, array2) {
  let array3 = [];

  for (
    let i = 0;
    i < (array1.length > array2.length ? array1.length : array2.length);
    i++
  ) {
    if (i <= array1.length - 1) {
      array3.push(array1[i]);
    }
    if (i <= array2.length - 1) {
      array3.push(array2[i]);
    }
  }
  console.log(array3);
}

main();
