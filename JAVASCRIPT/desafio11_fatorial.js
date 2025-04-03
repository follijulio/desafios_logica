function main() {
  let n = 7;
  const fatorial = calcularFatorial(n);
  console.log(fatorial);
}

function calcularFatorial(n) {
  let fatorial = n;

  if (n === 0) return 1;

  for (let index = n - 1; index > 1; index--) {
    fatorial = fatorial * index;
  }
  return fatorial;
}

main();
