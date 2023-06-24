var dato = localStorage.getItem("user");

if (dato !== null) {
    // El dato existe en el localStorage
    const user = JSON.parse(dato);

    const nameUser = document.getElementById('name-profile');
    nameUser.textContent = user.email[0];
    
    const divProfile = document.getElementById('profile-icono-usercontainer');
    divProfile.style.display = 'block';

    const btnLogin = document.getElementById('btn-login');
    btnLogin.style.display = 'none';
} else {
    // El dato no existe en el localStorage
    const divProfile = document.getElementById('profile-icono-usercontainer');
    divProfile.style.display = 'none';

    const btnLogin = document.getElementById('btn-login');
    btnLogin.style.display = 'block';
}
