const formu = document.getElementById('login-validation');

const loginIncorrectoEmpty = document.getElementById('login-validationuser-empty');
const loginIncorrecto = document.getElementById('login-validationuser');


formu.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('user-login').value;
    const password = document.getElementById('password-login').value;

    if(email === '' || password === '') {
        loginIncorrectoEmpty.style.display = 'block';

        loginIncorrecto.style.display == 'block' ? loginIncorrecto.style.display = 'none' : '';

        setTimeout(function() {
            loginIncorrectoEmpty.style.display = "none";
        }, 5000);
        return;
    }

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/users.json')
        .then(response => response.json())
        .then(datos => buscarUsuario(datos, email, password))
        .catch(error => console.error(error))
});

function buscarUsuario(datos, email, password) {
    console.log(datos);
    
    for (let key in datos) {
        const dato = datos[key];
        var encontre = false;

        console.log("Datos: " + dato["email"] + " -- " + email);
        console.log(dato["email"] == email);
        console.log("Datos: " + dato["password"] + " -- " + password);
        console.log(dato["password"] == password);
        if(dato["email"] == email && dato["password"] == password) {
            localStorage.setItem("user", email);

            const nameUser = document.getElementById('name-profile');
            nameUser.textContent = email[0];

            encontre = true;
            window.location.href = "/";
            break
        } 
        
    }
    
    if(!encontre) {
        
        loginIncorrecto.style.display = 'block';

        loginIncorrectoEmpty.style.display == 'block' ? loginIncorrectoEmpty.style.display = 'none' : '';

        setTimeout(function() {
            loginIncorrecto.style.display = "none";
        }, 5000);
    }
}