

const birthday = new Date("2026-01-08T00:00:00"); // CHANGE DATE
const timer = document.getElementById("timer");

function update() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    window.location.href = "surprise.html";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timer.textContent = `${d}d ${h}h ${m}m ${s}s 💕`;
}

setInterval(update, 1000);
update();
