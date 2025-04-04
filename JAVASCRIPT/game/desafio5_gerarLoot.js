function main() {
  let loot = sortearLoot();
  console.log(loot);
}

function sortearLoot() {
  const rng = Math.floor(Math.random() * 100) + 1;
  if (rng < 50) return "Poção de Cura"; //! 50% de chance de item comum
  if (rng < 80) return "Espada Lendária"; //! 30% de chance de item raro
  if (rng < 95) return "Armadura Dourada"; //! 15% de chance de item épico
  return "Orbe do Dragão"; //! 5% de chance de item lendário
}

main();
