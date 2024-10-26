const video = document.getElementById('background-video');
const logo = document.getElementById('logo');
const buttons = document.querySelectorAll('.transparent-button');
const buttonContainer = document.getElementById('buttons');

// Esperar antes de reproducir el video
setTimeout(() => {
    video.play();
}, 2000);

// Hacer que el logo aparezca 
setTimeout(() => {
    logo.style.opacity = 1; 
}, 1000);

// Cuando el video termina
video.addEventListener('ended', () => {
    buttonContainer.style.opacity = 1; 

    buttons.forEach(button => {
        button.style.opacity = 1; // Hacer que los botones sean visibles
    });
});