

document.addEventListener('DOMContentLoaded', () => {
    
    
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.createElement('div');
    menuIcon.classList.add('mobile-menu-icon');
    menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    
    if (window.innerWidth < 768) {
        document.querySelector('.navbar').appendChild(menuIcon);
    }

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show-mobile-menu');
    });

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
        }
    });

    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            window.location.href = '#'; 
            console.log('Image link clicked: ' + img.alt);
        });
    });
});