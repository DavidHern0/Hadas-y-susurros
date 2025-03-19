document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".firefly-container");
    const numFireflies = 35;

    for (let i = 0; i < numFireflies; i++) {
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");

        // Posición inicial aleatoria
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.left = `${Math.random() * 100}vw`;

        // Movimiento aleatorio
        firefly.style.setProperty("--tx1", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty1", `${Math.random() * 30 - 15}vh`);
        firefly.style.setProperty("--tx2", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty2", `${Math.random() * 30 - 15}vh`);
        firefly.style.setProperty("--tx3", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty3", `${Math.random() * 30 - 15}vh`);
        firefly.style.setProperty("--tx4", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty4", `${Math.random() * 30 - 15}vh`);

        // Variar duración de animación para cada luciérnaga
        firefly.style.animationDuration = `${Math.random() * 15 + 45}s`;

        container.appendChild(firefly);
    }
});

document.querySelectorAll('.event-card').forEach(card => {

});

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const distanceX = Math.abs(cardCenterX - e.clientX);
        const distanceY = Math.abs(cardCenterY - e.clientY);

        const threshold = 100;
        if (distanceX < threshold && distanceY < threshold) {
            card.classList.add('clicked');
        }   
    });

    card.addEventListener('click', () => {
        if (card.classList.contains('clicked')) {
            card.classList.remove('clicked');
        } else {
            card.classList.add('clicked');
        }
    });
});
