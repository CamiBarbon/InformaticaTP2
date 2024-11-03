const video = document.getElementById('background-video');
const logo = document.getElementById('logo');
const buttons = document.querySelectorAll('.transparent-button');
const buttonContainer = document.getElementById('buttons');

// Esperar antes de reproducir el video
setTimeout(() => {
    video.play();
}, 500);

// Hacer que el logo aparezca 
setTimeout(() => {
    logo.style.opacity = 1; 
    // Hacer visibles los botones una vez que el logo es completamente opaco
    buttonContainer.style.opacity = 1; 
    buttons.forEach(button => {
        button.style.opacity = 1; // Hacer que los botones sean visibles
    });
}, 1000);

// Cuando el video termina
video.addEventListener('ended', () => {
    // Si los botones aún no son visibles, hacer que sean visibles
    if (buttonContainer.style.opacity === '0' || buttonContainer.style.opacity === '') {
        buttonContainer.style.opacity = 1; 
        buttons.forEach(button => {
            button.style.opacity = 1; // Hacer que los botones sean visibles
        });
    }
});