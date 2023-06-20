
const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');

fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/cursos/' + cursoId + '.json')
    .then(response => response.json())
    .then(curso => {
        const tittle = document.getElementById('tittle-course');
        tittle.textContent = curso.name;

        const description = document.getElementById('asignar-description');
        description.textContent = curso.description;

        const containerIMG = document.getElementById('image-course-container');
        const img = document.createElement('img');
        img.src = curso.image;
        containerIMG.appendChild(img);

        const price = document.getElementById('asignar-precio');
        price.textContent = curso.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

        const calificaion = document.getElementById('asignar-calificacion');
        calificaion.textContent = curso.qualification;
    });