const form = document.getElementById('contact-us-form');

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }

    form.classList.add('was-validated');
})