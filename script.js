document.addEventListener("DOMContentLoaded", () => {
    // Efecto de sonido de lluvia al cargar la página
    const audio = new Audio("lluvia.mp3"); // Asegúrate de tener un archivo de sonido "lluvia.mp3" en tu proyecto
    audio.loop = true;
    audio.play();

    const rain = document.querySelector(".rain");
    let opacity = 0.1;
    let increasing = true;

    setInterval(() => {
        if (increasing) {
            opacity += 0.02;
            if (opacity >= 0.3) increasing = false;
        } else {
            opacity -= 0.02;
            if (opacity <= 0.1) increasing = true;
        }
        rain.style.background = `rgba(255, 0, 0, ${opacity})`;
    }, 100);

    // Añadir un pequeño efecto al pasar el mouse sobre la tarjeta
    const card = document.querySelector(".card");
    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-10px)";
        card.style.transition = "transform 0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

document.getElementById('romanticButton').addEventListener('click', function() {
    alert('Hackeando tu corazón');
});