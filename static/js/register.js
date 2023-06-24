const form = document.getElementById('register-user');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const divInfo = document.getElementById('register-exitoso');
    divInfo.style.display = 'none';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const gender = document.getElementById('gender').value;

    var emailTrue = false;
    var passwordTrue = false;
    var dateTrue = false;
    var genderTrue = false;

    if(email.length === 0) {
        const validation = document.getElementById('email-validation-register');
        validation.style.display = "block";
    }
    
    if(email.length !== 0) {
        const validation = document.getElementById('email-validation-register');
        validation.style.display = "none";
        emailTrue = true;
    }

    if(password.length === 0) {
        const validation = document.getElementById('password-validation-register');
        validation.style.display = "block";
    }
    
    if(password.length !== 0) {
        const validation = document.getElementById('password-validation-register');
        validation.style.display = "none";
        passwordTrue = true;
    }
    
    if(dateOfBirth.length === 0) {
        const validation = document.getElementById('date-validation-register');
        validation.style.display = "block";
    }

    if(dateOfBirth.length !== 0) {
        const validation = document.getElementById('date-validation-register');
        validation.style.display = "none";
        dateTrue = true;
    }

    if(gender.length === 0) {
        const validation = document.getElementById('gender-validation-register');
        validation.style.display = "block";
    }
    if(gender.length !== 0) {
        const validation = document.getElementById('gender-validation-register');
        validation.style.display = "none";
        genderTrue = true;
    }

    if(!emailTrue || !passwordTrue || !dateTrue || !genderTrue) {
        return;
    }

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            date_of_birth: dateOfBirth,
            gender: gender,
            date_creation: new Date(),
            name: '',
            surname: ''
        })
    })
        .then(response => {
            const divInfo = document.getElementById('register-exitoso');

            const infoRegistrado = document.getElementById('info-userregistrado');
            infoRegistrado.textContent = "¡ Usuario Registrado !";
            
            const infoLogin = document.getElementById('info-loginnewuser');
            infoLogin.textContent = "Ahora podés iniciar sesion";

            divInfo.style.display = "block";
            setTimeout(function() {
                divInfo.style.display = "none";
            }, 5000);

            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('date-of-birth').value = '';
            document.getElementById('gender').value = '';
        })
        .catch(error => console.error(error));
});