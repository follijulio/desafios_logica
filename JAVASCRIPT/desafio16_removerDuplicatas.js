function main() {
  console.log(
    "esperado [1, 2, 3, 4, 5] =>",
    removerDuplicata([1, 2, 2, 3, 4, 4, 5])
  );

  console.log(
    "esperado ['a', 'b', 'c'] =>",
    removerDuplicata(["a", "b", "a", "c", "c"])
  );
  console.log(
    "esperado [10, 20, 30, 40] =>",
    removerDuplicata([10, 20, 30, 40])
  );
}

function removerDuplicata(array) {
  const termo = new Map();

  array.forEach((item) => {
    const count = (termo.get(item) || 0) + 1;
    termo.set(item, count);
  });

  return Array.from(termo.keys());
}

main();
