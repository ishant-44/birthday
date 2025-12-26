const birthday = new Date("2026-01-08T00:00:00");
const now = new Date();

// Block ONLY if clearly before birthday
if (now.getTime() + 1000 < birthday.getTime()) {
  window.location.replace("index.html");
}

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const pieces = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  d: Math.random() * 3 + 1,
  o: Math.random()
}));

function drawConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,105,180,${p.o})`;
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();
/* =========================
   🎞️ SIDEWAYS SLIDER LOGIC
========================= */

const orbit = document.getElementById("orbit");
const images = orbit.querySelectorAll("img");

let current = 0;
const total = images.length;

function updateSlider() {
  images.forEach((img, i) => {
    img.classList.remove("active", "next", "prev");

    if (i === current) {
      img.classList.add("active");
    } 
    else if (i === (current + 1) % total) {
      img.classList.add("next");
    } 
    else if (i === (current - 1 + total) % total) {
      img.classList.add("prev");
    }
  });

  current = (current + 1) % total;
}

updateSlider();
setInterval(updateSlider, 3000);


const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
