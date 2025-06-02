const SCROLL_DELAY = 800; 
const SMOOTH_SCROLL = true; 

let isScrolling = false;
let lastScrollTime = 0;

window.addEventListener("wheel", handleWheel, { passive: false });

function handleWheel(e) {
  e.preventDefault(); 
  
  if (isScrolling) return;
  if (Date.now() - lastScrollTime < SCROLL_DELAY) return;

  isScrolling = true;
  lastScrollTime = Date.now();

  const direction = e.deltaY > 0 ? 1 : -1; 
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

  sections.forEach(s => s.classList.remove("active"));
  sections[targetIndex].classList.add("active");

  if (SMOOTH_SCROLL) {
    sections[targetIndex].scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({
      top: sections[targetIndex].offsetTop,
      behavior: "instant" 
    });
  }

  setTimeout(() => { isScrolling = false; }, SCROLL_DELAY);
}

document.querySelector("section")?.classList.add("active");