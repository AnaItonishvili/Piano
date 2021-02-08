const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => play(btn));
});

function play(btn) {
  const audio = document.getElementById(btn.dataset.key);
  audio.currentTime = 0;
  audio.play();
}
