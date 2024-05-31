document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let valid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('success');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
    successMessage.style.display = 'none';

    if (!name) {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    }

    if (!email) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        valid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
        valid = false;
    }

    if (!message) {
        messageError.textContent = 'Message is required';
        messageError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        successMessage.textContent = 'Your message has been sent successfully !';
        successMessage.style.display = 'block';
        setTimeout(function() {
            window.location.href = 'main.html';
        }, 2000);
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
