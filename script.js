
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });


    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        } else {
            header.style.padding = "0";
            header.style.boxShadow = "none";
        }
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
});