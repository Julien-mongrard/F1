let lastScroll = 0; 
const scrollSpeed = 0.01;

// Déplacer l'image progressivement
function moveImage() {
    let scrollPosition = window.scrollY;
    let img = document.querySelector(".imgfond");

    // Déplacer l'image vers la gauche avec une vitesse plus progressive
    let newLeft = Math.max(50 - scrollPosition * 4, 10);  
    img.style.left = newLeft + "%";
}

// Fonction pour vérifier si nous sommes dans la section 1
function isInSection1() {
    const section1 = document.getElementById('section1');
    const rect = section1.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > window.innerHeight;
}

// Limiter la fréquence d'exécution avec requestAnimationFrame
let scrollTimeout;
function onScroll(event) {
    if (isInSection1()) {
        event.preventDefault(); // Empêcher le défilement standard
        let currentScroll = window.scrollY + event.deltaY * scrollSpeed;
        currentScroll = Math.max(0, currentScroll);
        window.scrollTo(0, currentScroll);
    }
    if (!scrollTimeout) {
        scrollTimeout = requestAnimationFrame(() => {
            moveImage();
            scrollTimeout = null;
        });
    }
}

window.addEventListener("scroll", moveImage);
window.addEventListener('wheel', onScroll, { passive: false });


// Créer un observer pour détecter quand la section devient visible
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajouter la classe 'visible' lorsque la section est visible
            entry.target.classList.add('visible');
            // Arrêter d'observer la section après qu'elle soit devenue visible
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Déclenche l'animation lorsque 50% de l'élément est visible
});

// Observer la section
const section = document.querySelector('#section2');
observer.observe(section);
