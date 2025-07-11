function main() {
  k = 15;
  var fibonacci = [0, 1];
  for (let index = 0; index < k; index++) {
    fibonacci.push(fibonacci[index + 1] + fibonacci[index]);
  }

  console.log(fibonacci[k]);
}

main();
