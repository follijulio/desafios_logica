function fatorial(n) {
  value = 1;

  for (let i = n; i > 1; i--) {
    console.log(i)
    value *= i - 1;
    console.log(i)

  }

  return value;
}

function main() {
  const r = fatorial(3);
  console.log(r);
}

main();
