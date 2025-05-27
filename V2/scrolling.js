// Config
const SCROLL_DELAY = 800; // Délai minimal entre 2 défilements (ms)
const SMOOTH_SCROLL = true; // Active le défilement doux natif

// Variables
let isScrolling = false;
let lastScrollTime = 0;

// Détection de la molette
window.addEventListener("wheel", handleWheel, { passive: false });

function handleWheel(e) {
  e.preventDefault(); // Bloque le défilement natif
  
  if (isScrolling) return;
  if (Date.now() - lastScrollTime < SCROLL_DELAY) return;

  isScrolling = true;
  lastScrollTime = Date.now();

  const direction = e.deltaY > 0 ? 1 : -1; // 1 = bas, -1 = haut
  scrollToSection(direction);
}

function scrollToSection(direction) {
  const current = document.querySelector("section.active");
  const sections = document.querySelectorAll("section");
  let targetIndex = 0;

  if (current) {
    const currentIndex = Array.from(sections).indexOf(current);
    targetIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
  }

  // Met à jour la section active
  sections.forEach(s => s.classList.remove("active"));
  sections[targetIndex].classList.add("active");

  // Défilement
  if (SMOOTH_SCROLL) {
    sections[targetIndex].scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({
      top: sections[targetIndex].offsetTop,
      behavior: "instant" // Défilement instantané mais contrôlé
    });
  }

  // Réactive le scroll après un délai
  setTimeout(() => { isScrolling = false; }, SCROLL_DELAY);
}

// Initialisation
document.querySelector("section")?.classList.add("active");