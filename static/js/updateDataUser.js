const formDataUpdate = document.getElementById('form-data-update-user');

formDataUpdate.addEventListener('submit', (event) => {
    event.preventDefault();

    const dato = localStorage.getItem("user");
    if (dato === null) {
        return;
    }
    
    const name = document.getElementById('name-user-update').value;
    const surname = document.getElementById('surname-user-update').value;
    const password = document.getElementById('password-user-update').value;
    const dateOfBirth = document.getElementById('dateofbirth-user-update').value;
    const gender = document.getElementById('gender-user-update').value;

    if(name === '') {
        document.getElementById('name-validation-update').style.display = 'block';
    } else { document.getElementById('name-validation-update').style.display = 'none'; }
    if(surname === '') {
        document.getElementById('surname-validation-update').style.display = 'block';
    } else { document.getElementById('surname-validation-update').style.display = 'none'; }
    if(password === '') {
        document.getElementById('password-validation-update').style.display = 'block';
    } else { document.getElementById('password-validation-update').style.display = 'none'; }

    if(name === '' || surname === '' || password === '') {
        return;
    }

    const objeto = {
        "name": name,
        "surname": surname,
        "password": password,
        "date_of_birth": dateOfBirth,
        "gender": gender
    }

    const user = JSON.parse(dato);

    fetch(`https://python-app-web-cursos-it-default-rtdb.firebaseio.com/users/${user.id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(objeto)
    }).then(response => { window.location.href = '/profile' })
});