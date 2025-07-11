function main() {
  console.log(calcularLevel(50));
  console.log(calcularLevel(200));
  console.log(calcularLevel(1200));
}

function calcularLevel(xp) {
  if (xp < 101) return "nível 1";
  if (xp < 251) return "nível 2";
  if (xp < 501) return "nível 3";
  if (xp < 1001) return "nível 4";
  return "nível 5";
}

main();
