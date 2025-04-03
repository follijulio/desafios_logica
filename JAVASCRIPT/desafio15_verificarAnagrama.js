function main() {
  var palavra1 = "amor";
  var palavra2 = "roma";
  const isAnagrama = descobrirAnagrama(palavra1, palavra2);
  console.log("É UM ANAGRAMA:", isAnagrama);
}

function descobrirAnagrama(palavra1, palavra2) {
  if (palavra1.length != palavra2.length) return false;

  const array1 = palavra1.split("");
  const array2 = palavra2.split("");

  const termo1 = new Map();
  const termo2 = new Map();

  array1.forEach((letra) => {
    const count = (termo1.get(letra) || 0) + 1;
    termo1.set(letra, count);
  });

  array2.forEach((letra) => {
    const count = (termo2.get(letra) || 0) + 1;
    termo2.set(letra, count);
  });

  for (let i = 0; i < termo1.length; i++) {
    if (termo2.get(array1[i]) != termo1.get(array1[i])) {
      return false;
    }
  }
  return true;
}

main();
