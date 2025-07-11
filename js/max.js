(function () {
  const video = document.querySelector("video");
  if (!video) return console.warn("❌ Vídeo não encontrado na página.");

  const setRate = (rate) => {
    video.playbackRate = rate;
    console.log(`🚀 Velocidade: ${rate.toFixed(2)}x`);
  };
  setRate(1.25);
  document.addEventListener("keydown", (e) => {
    if (e.key === "+" || (e.shiftKey && e.key === "=")) {
      setRate(Math.min(video.playbackRate + 0.1, 16));
    } else if (e.key === "-" || e.key === "_") {
      setRate(Math.max(video.playbackRate - 0.1, 0.1));
    } else if (e.key.toLowerCase() === "r") {
      setRate(1);
    }
  });

  console.log("⚙️ Atalhos ativos: + / - para ajustar, R para resetar pra 1x");
})();
