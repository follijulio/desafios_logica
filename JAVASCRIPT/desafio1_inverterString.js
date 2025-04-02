function main() {
  var string = "abc";
  console.log("STRING INICIAL: ", string);
  var array = transformarString(string);
  var arrayInvertido = inverter(array);
  var stringInvertida = tarnsformarArray(arrayInvertido);
  
  console.log("STRING FINAL: ", stringInvertida);
}

function tarnsformarArray(array) {
  return array.join("");
}

function transformarString(string) {
  return string.split("");
}

function inverter(array) {
  return array.reverse();
}

main();
