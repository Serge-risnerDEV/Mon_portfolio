// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
},{ threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Formulaire contact
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    contactForm.reset();
});


const modal = document.getElementById("videoModal");

function openModal() {
    modal.classList.add("show");
}

function openModal() {
    modal.classList.remove("show");
}
