let inventario = [];

function adicionar(item) {
  inventario.push(item);
}

function remover(itemName) {
  inventario = inventario.slice().filter((item) => item != itemName);
}

function listar() {
  console.log(inventario);
}

function main() {
  adicionar("espada");
  adicionar("escudo");
  adicionar("poção");
  listar();
  remover("escudo");
  listar();
  adicionar("arco");
  listar();
}

main();
