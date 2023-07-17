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

    if(email.length === 0) {
        const validation = document.getElementById('email-validation-register');
        validation.style.display = "block";
        const validationTwo = document.getElementById('emailrepeat-validation-register');
        validationTwo.style.display = "none";
    }
    
    if(email.length !== 0) {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(emailRegex.test(email)) {
        
            fetch(`https://python-app-web-cursos-it-default-rtdb.firebaseio.com/users.json`)
                .then(response => response.json())
                .then(data => {
                    var buscarEmailRegistrado = false;

                    for (let key in data) {
                        const objeto = data[key];

                        console.log(objeto["email"] == email)
                        console.log(objeto["email"] === email)

                        if(objeto["email"] === email) {
                            buscarEmailRegistrado = true;
                        }
                    }

                    if(buscarEmailRegistrado) {
                        console.log('Email ya registrado');
                        const validation = document.getElementById('email-validation-register');
                        validation.style.display = "none";
                        const validationTwo = document.getElementById('emailrepeat-validation-register');
                        validationTwo.style.display = "block";
                    } else {
                        console.log('Email NO registrado');
                        const validation = document.getElementById('email-validation-register');
                        validation.style.display = "none";
                        const validationTwo = document.getElementById('emailrepeat-validation-register');
                        validationTwo.style.display = "none";
                        emailTrue = true;
                    }

                    seguirValidacion();
                })

        } else {
            const validation = document.getElementById('email-validation-register');
            validation.style.display = "block";
            const validationTwo = document.getElementById('emailrepeat-validation-register');
            validationTwo.style.display = "none";
        }
    }

    function seguirValidacion() {
        
        console.log('valores boolean')
        console.log(emailTrue)
        console.log(passwordTrue)
        console.log(dateTrue)
        console.log(genderTrue)
    
        if(!emailTrue || !passwordTrue || !dateTrue || !genderTrue) {
            console.log('No voy a registrar el user')
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

    }

});