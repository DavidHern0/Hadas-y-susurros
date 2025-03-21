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

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const imageNames = [
        "gallery1.png", "gallery2.png", "gallery3.png", "gallery4.png",
        "gallery5.png", "gallery6.png", "gallery7.png", "gallery8.png",
        "logo1.jpg", "logo2.jpg", "background.png"
    ];

    const gallery = document.getElementById("gallery");
    let currentIndex = 0;
    let imagesPerPage = window.innerWidth <= 768 ? 2 : 5;

    function renderGallery() {
        gallery.innerHTML = '';
        for (let i = currentIndex; i < currentIndex + imagesPerPage && i < imageNames.length; i++) {
            let img = document.createElement("img");
            img.src = `./src/${imageNames[i]}`;
            img.alt = imageNames[i];
            img.dataset.filename = imageNames[i].charAt(0).toUpperCase() + imageNames[i].slice(1).split('.').slice(0, -1).join('.');
            img.classList.add("gallery-img");
            img.onclick = function () { openLightbox(this); };
            gallery.appendChild(img);
        }
    }

    function moveGallery(direction) {
        if (direction === "left" && currentIndex > 0) {
            currentIndex -= imagesPerPage;
        } else if (direction === "right" && currentIndex + imagesPerPage < imageNames.length) {
            currentIndex += imagesPerPage;
        }
        renderGallery();
    }

    renderGallery();

    window.moveGallery = moveGallery;  // Make the function accessible to the buttons
});

function openLightbox(img) {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox-caption").innerText = img.dataset.filename;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("a-left").style.display = "none";
    document.getElementById("a-right").style.display = "none";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("a-left").style.display = "flex";
    document.getElementById("a-right").style.display = "flex";
}
