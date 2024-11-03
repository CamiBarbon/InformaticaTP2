document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelector('.menu-items');
    const logo = document.querySelector('.logo-menu');
    
    // Mostrar el menú al cargar la página
    menuItems.style.maxHeight = '300px';

    // Ocultar el menú después de 20 segundos
    setTimeout(() => {
        menuItems.style.maxHeight = '0'; // Ocultar el menú
    }, 2000);

    // Mostrar el menú al pasar el mouse sobre el logo
    logo.addEventListener('mouseover', function() {
        menuItems.style.maxHeight = '300px'; // Mostrar el menú
    });

    // Ocultar el menú al salir del mouse del logo
    logo.addEventListener('mouseleave', function() {
        menuItems.style.maxHeight = '0'; // Ocultar el menú
    });

    // Evitar ocultar el menú al pasar el mouse sobre los enlaces
    menuItems.addEventListener('mouseover', function() {
        menuItems.style.maxHeight = '300px'; // Mantener el menú visible
    });

    menuItems.addEventListener('mouseleave', function() {
        menuItems.style.maxHeight = '0'; // Ocultar el menú
    });
});