/**
 * @param {number} vbase
 * @param {string[]} acoes
 */

function calcularVida(vbase, acoes) {
  const eventos = {
    "dano leve": -10,
    "dano médio": -25,
    "dano crítico": -50,
    "cura": 20,
  };

  let vida = vbase;

  acoes.forEach((evento) => {
    vida += eventos[evento] || 0;
    vida = Math.max(0, Math.min(vida, vbase)); 
  });
  console.log(vida)
  return vida;
}


function main() {
  calcularVida(100, ["dano leve", "dano médio", "cura"]);
  calcularVida(150, ["dano crítico", "dano crítico", "cura"]);
  calcularVida(80, ["cura", "cura", "cura"]);
  calcularVida(120, ["dano leve", "dano leve", "dano médio", "dano crítico"]);
  calcularVida(200, []);
}

main();
