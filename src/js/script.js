document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Animação de fade-in para seções
    const sections = document.querySelectorAll('.fade-in-section');
    
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            // Adiciona um offset para que a animação comece antes da seção chegar no viewport
            const offset = 100;
            
            if (windowBottom - offset > sectionTop && windowTop + offset < sectionBottom) {
                section.classList.add('visible');
            }
        });
    }
    
    // Verifica a visibilidade inicialmente e durante o scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    
    // Suaviza o scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});