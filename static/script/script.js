document.addEventListener('DOMContentLoaded', function() {
    const personagens = document.querySelectorAll('.personagem');
    characters.forEach(character => {
        personagens.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        character.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    const carroContainer = document.querySelector('.carro-container');
    carroContainer.addEventListener('mouseenter', function() {
        const musicNotes = document.querySelectorAll('.musica-nota');
        musicaNotas.forEach(nota => {
            nota.style.animation = 'bounce 0.5s infinite alternate';
        });
    });
    
    carroContainer.addEventListener('mouseleave', function() {
        const musicaNotas = document.querySelectorAll('.musica-nota');
        musicaNotas.forEach(nota => {
            nota.style.animation = 'none';
        });
    });

    document.styleSheets[0].insertRule(`
        @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-10px); }
        }
    `, document.styleSheets[0].cssRules.length);

    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = scrollPosition * 0.05 + 'px';
    });

    const mainElements = document.querySelectorAll('section');
    mainElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
