function main() {
  console.log("10 -> 1");
  reverseforloop(10);
  console.log("0 -> 10");
  forloop(10, 0);
}

function forloop(n, i) {
  if (i < n) {
    console.log(i);
    forloop(n, i + 1);
  }
}

function reverseforloop(n) {
  let i = n;
  if (i > 0) {
    console.log(i);
    reverseforloop(n - 1);
  }
}

main();