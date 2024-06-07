document.addEventListener('DOMContentLoaded', () => {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const form = document.getElementById('registrationForm');

    emailField.addEventListener('input', validateEmail);
    passwordField.addEventListener('input', validatePassword);

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.setCustomValidity("Proszę podać poprawny adres e-mail.");
        } else {
            emailField.setCustomValidity("");
        }
    }

    function validatePassword() { 
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(passwordField.value)) {
            passwordField.setCustomValidity("Proszę podać hasło zawierające minimum 8 znaków, 1 cyfrę i 1 znak specjalny.");
        } else {
            passwordField.setCustomValidity("");
        }
    }


    form.addEventListener('submit', (event) => {
        validateEmail();
        validatePassword();

        if (!form.checkValidity()) {
            event.preventDefault();
        }
    });
});

