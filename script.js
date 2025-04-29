// Typing Effect
const typed = new Typed("#typed-text", {
  strings: ["Anand Kushwaha", "a Developer", "a Designer", "a Creator"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Time Display
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleTimeString();
  document.getElementById("timezone").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}
setInterval(updateTime, 1000);
updateTime();

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
let isDark = false;

function applyTheme() {
  body.setAttribute("data-theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  applyTheme();
});

applyTheme();

// Smooth Scroll
document.documentElement.style.scrollBehavior = "smooth";

// Fade-in Animation using IntersectionObserver
const cards = document.querySelectorAll(".bento-card, .project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});
