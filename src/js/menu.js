function menuShow() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Fechar o menu ao clicar no X
document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('active');
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.remove('active');
    });
});

// Atualizar o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Criar partículas dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('li');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = Math.random() * 10 + 10 + 's';
            particlesContainer.appendChild(particle);
        }
    }
});