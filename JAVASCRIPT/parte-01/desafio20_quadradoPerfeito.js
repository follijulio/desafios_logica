function main() {
  const n = 16;
  const isQuadrado = descobrirQuadradoPerfeito(n);
  console.log(isQuadrado);
}

function descobrirQuadradoPerfeito(n) {
  for (let i = 0; i < n; i++) {
    if (i ** 2 == n) {
      return true;
    }
  }
  return false;
}

main();
