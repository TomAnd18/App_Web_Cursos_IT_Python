var dato = localStorage.getItem("user");

if (dato !== null) {
    const user = JSON.parse(dato);

    fetch(`https://python-app-web-cursos-it-default-rtdb.firebaseio.com/users/${user.id}.json`)
        .then(response => response.json())
        .then(data => paintData(data))
}

function paintData(data) {

    if(data.name !== undefined) {
        const setName = document.getElementById('set-datauser-name');
        setName.textContent = data.name;
        document.getElementById('name-user-update').value = data.name;
    }

    if(data.surname !== undefined) {
        const setSurname = document.getElementById('set-datauser-surname');
        setSurname.textContent = data.surname;
        document.getElementById('surname-user-update').value = data.surname;
    }


    const setEmail = document.getElementById('set-datauser-email');
    setEmail.textContent = data.email;
    document.getElementById('email-user-update').value = data.email;
    
    const setGender = document.getElementById('set-datauser-gender');
    setGender.textContent = data.gender;
    document.getElementById('gender-user-update').value = data.gender;
    
    const setDateOfBirth = document.getElementById('set-datauser-dateofbirth');
    setDateOfBirth.textContent = data.date_of_birth;
    document.getElementById('dateofbirth-user-update').value = data.date_of_birth;


    var dateCreation = data.date_creation;
    var dateTime = new Date(dateCreation);
    var year = dateTime.getFullYear();
    var month = String(dateTime.getMonth() + 1).padStart(2, "0"); // Agregar cero inicial si es necesario
    var day = String(dateTime.getDate()).padStart(2, "0"); // Agregar cero inicial si es necesario
    var hours = String(dateTime.getHours()).padStart(2, "0"); // Agregar cero inicial si es necesario
    var minutes = String(dateTime.getMinutes()).padStart(2, "0"); // Agregar cero inicial si es necesario
    var formattedDateTime = year + "-" + month + "-" + day + " | " + hours + ":" + minutes + "hs";
    
    const setDateOfCreation = document.getElementById('set-datauser-dateofcreation');
    setDateOfCreation.textContent = formattedDateTime;


    const setPassword = document.getElementById('set-datauser-password');
    for (let i=0; i < data.password.length; i++) {
        setPassword.textContent += '*';
    }
    document.getElementById('password-user-update').value = data.password;

    //ADVERTENCIA DATOS
    console.log(data.name === '' || data.surname === '' || data.password === '')
    if(data.name === '' || data.surname === '' || data.password === '') {
        document.getElementById('validar-advertencia-datauser').style.display = 'flex';
    } else {
        document.getElementById('validar-advertencia-datauser').style.display = 'none';
    }


    //BTN PASSWORD
    const shownPassword = document.getElementById('show-password');

    const btnUnshownPassword = document.getElementById('unshown-password');
    btnUnshownPassword.style.display = 'none';

    shownPassword.addEventListener('click', () => {
        shownPassword.style.display = 'none';
        btnUnshownPassword.style.display = 'inline-block';

        setPassword.textContent = data.password;
        setPassword.setAttribute("style", "font-size: 1rem !important; letter-spacing: 2px;");
    })

    btnUnshownPassword.addEventListener('click', () => {
        btnUnshownPassword.style.display = 'none';
        shownPassword.style.display = 'inline-block';

        setPassword.textContent = '';
        for (let i=0; i < data.password.length; i++) {
            setPassword.textContent += '*';
        }
        setPassword.setAttribute("style", "font-size: 1.2rem !important; letter-spacing: 4px;");
    })
}