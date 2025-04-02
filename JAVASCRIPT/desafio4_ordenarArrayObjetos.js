//MEU JEITO
function main() {
  const objetos = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 20 },
    { nome: "Carlos", idade: 30 },
  ];
  console.log("ANTES")
  objetos.map((item) => console.log(item.idade, "", item.nome));
  var arrayOrdenado = ordernarIdade(objetos);
  
  console.log("\nDEPOIS")
  arrayOrdenado.map((item) => console.log(item.idade, "", item.nome));
}

function ordernarIdade(objetos = []) {
  let menor;
  var arrayOrdenado = [];
  let i = 0;
  let filtrados = [];

  do {
    if (i == 0) {
      menor = descobrirMenor(objetos);
    } else {
      filtrados = objetos.filter((item) => item.idade > menor.idade);
      menor = descobrirMenor(filtrados);
    }

    arrayOrdenado.push(menor);
    i++;
  } while (i < objetos.length);
  return arrayOrdenado;
}
function descobrirMenor(objetos = []) {
  let menor;
  objetos.map((item, i) => {
    if (i == 0 || item.idade < menor.idade) menor = item;
  });

  return menor;
}

main();

//JEITO MAIS SIMPLES
// function main() {
//   const objetos = [
//     { nome: "Ana", idade: 25 },
//     { nome: "Bruno", idade: 20 },
//     { nome: "Carlos", idade: 30 },
//   ];
//   console.log("ANTES");
//   console.table(objetos);

//   const arrayOrdenado = objetos.sort((a, b) => a.idade - b.idade);

//   console.log("\nDEPOIS");
//   console.table(arrayOrdenado);
// }

// main();
