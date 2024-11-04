const totalImages = 27; // Total de imágenes
let currentIndex = 0; // Índice actual
const carouselInner = document.getElementById('carouselImages');

// Mostrar el modal al cargar la página
$(document).ready(function() {
    $('#carouselModal').modal('show');
    loadImages(); // Cargar imágenes al abrir el modal
    setInterval(changeImage, 20000); 
});

// Función para cargar las imágenes en el carrusel
function loadImages() {
    carouselInner.innerHTML = ''; // Limpiar contenido previo

    for (let i = 0; i < 27; i++) {
        const srcIndex = (currentIndex + i) % totalImages + 1;
        const isActive = i === 0 ? 'active' : ''; // Solo la primera imagen es activa
        carouselInner.innerHTML += `
            <div class="carousel-item ${isActive}">
                <img src="../img/m-social/social-${srcIndex}.jpg" class="d-block w-100" alt="Imagen ${srcIndex}">
            </div>
        `;
    }
}

// Función para alternar imágenes
function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Incrementar índice
    loadImages(); // Cargar nuevas imágenes
}