document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const contactForm = document.getElementById('contact-form');

    const validate = (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value.trim() === "") {
            alert("Por favor, ingresa tu nombre.");
            name.focus();
            return false;
        }

        if (email.value.trim() === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            email.focus();
            return false;
        }

        if (!emailIsValid(email.value)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            email.focus();
            return false;
        }

        if (message.value.trim() === "") {
            alert("Por favor, ingresa un mensaje.");
            message.focus();
            return false;
        }

        alert("Formulario enviado exitosamente.");
        contactForm.submit(); 
    };

    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    submitBtn.addEventListener('click', validate);
});