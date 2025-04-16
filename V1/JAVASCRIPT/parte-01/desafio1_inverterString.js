function main() {
  var string = "abc";
  console.log("STRING INICIAL: ", string);
  var array = string.split("");
  var arrayInvertido = array.reverse();
  var stringInvertida = arrayInvertido.join("");
  console.log("STRING FINAL: ", stringInvertida);
}

main();
