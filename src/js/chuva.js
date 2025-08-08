document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona o contêiner da chuva dentro da main#proposta-container
    const mainProposta = document.getElementById('proposta-container');
    const rainWrapper = mainProposta.querySelector('.pizza-rain-container');

    if (!rainWrapper) {
        console.error('O contêiner da chuva não foi encontrado dentro da #proposta-container.');
        return;
    }

    // 2. Configurações da animação
    const pizzaCount = 15;
    const minSize = 30;
    const maxSize = 60;
    const minDuration = 10;
    const maxDuration = 20;

    // 3. Cria cada pizza individualmente
    for (let i = 0; i < pizzaCount; i++) {
        const pizza = document.createElement('div');
        pizza.className = 'pizza-item';

        const size = Math.random() * (maxSize - minSize) + minSize;
        const startX = Math.random() * 100;
        const duration = Math.random() * (maxDuration - minDuration) + minDuration;
        const delay = Math.random() * -maxDuration;

        pizza.style.width = `${size}px`;
        pizza.style.height = `${size}px`;
        pizza.style.left = `${startX}vw`;
        pizza.style.animationDuration = `${duration}s`;
        pizza.style.animationDelay = `${delay}s`;
        pizza.style.top = `-${maxSize}px`;

        // 4. Adiciona a pizza ao contêiner da chuva dentro da main
        rainWrapper.appendChild(pizza);
    }
});