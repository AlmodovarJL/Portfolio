/* ===== Smooth Scroll for Navbar Links ===== */
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* ===== Navbar Glow on Scroll ===== */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("glow");
  } else {
    nav.classList.remove("glow");
  }
});

/* ===== Fade/Slide Sections on Scroll ===== */
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".hidden").forEach((section) => {
  observer.observe(section);
});

/* ===== Footer Year Auto-Update ===== */
document.getElementById("year").textContent = new Date().getFullYear();
