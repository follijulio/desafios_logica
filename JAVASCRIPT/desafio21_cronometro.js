function main() {
  timer(5);
}

function timer(t) {
  let minutos = t;
  let segundos = 0;
  const interval = setInterval(() => {
    if (segundos == 0) {
      if (minutos > 0) {
        segundos = 59;
        minutos--;
      } else {
        clearInterval(interval);
      }
    } else {
      segundos--;
    }
    console.log(minutos, ":", segundos);
  }, 1);
}

main();
