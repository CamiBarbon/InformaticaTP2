document.addEventListener("DOMContentLoaded", function() {
    // Selecciona la imagen
    const manoImg = document.querySelector('.mano-img');

    // Oculta la imagen al principio
    manoImg.style.opacity = 0;

    // Muestra la imagen después de que todo el contenido se haya cargado
    window.onload = function() {
        setTimeout(() => {
            manoImg.style.transition = "opacity 1s"; // Transición suave
            manoImg.style.opacity = 1; // Cambia la opacidad a 1 para mostrar
        }, 1500); // Espera 5000 milisegundos (5 segundos)
    };
});