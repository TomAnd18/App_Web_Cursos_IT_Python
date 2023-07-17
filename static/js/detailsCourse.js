
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

        const  totalCalifi = document.getElementById('set-calificacion-total');
        totalCalifi.textContent = '(' + Math.floor(curso.views / 1.1).toLocaleString('es-AR') + ' calificaciones)'

        const duration = document.getElementById('duration-getCourse');
        duration.textContent = Math.floor(curso.duration / 2);

        const files = document.getElementById('files-download');
        files.textContent = curso.files;

        const alumnos = document.getElementById('alumnos-set');
        alumnos.textContent = curso.views.toLocaleString('es-AR');

        const setCantSecciones = document.getElementById('set-cantSecciones');
        setCantSecciones.textContent = curso.classes.length;
        
        const listClasses = document.getElementById('list-classes');
        var cantClasesTotal = 0;

        for (let key in curso.classes) {

            const e = curso.classes[key];

            // Crear el nuevo elemento <li>
            const liElement = document.createElement('li');

            // Crear el contenido del elemento <li>
            const spanElement1 = document.createElement('span');
            spanElement1.classList.add('tittle-content');
            
            const imgSpanElement1 = document.createElement('img');
            imgSpanElement1.src = '../static/images/arrow-right.png';
            imgSpanElement1.setAttribute("style", "width: 18px; margin-right: 8px; position: relative; top: -2px;");
            
            const tittleSpanElement1 = document.createElement('span');
            tittleSpanElement1.textContent = e.tittle;

            spanElement1.appendChild(imgSpanElement1);
            spanElement1.appendChild(tittleSpanElement1);
            // spanElement1.innerHTML = '<img style="width: 18px; margin-right: 8px;" src="../static/images/arrow-right.png" alt="arrow down"> Introduccion';

            const spanElement2 = document.createElement('span');
            spanElement2.textContent = e.amount_classes + ' clases';

            cantClasesTotal += parseInt(e.amount_classes);

            // Agregar los elementos secundarios al elemento <li>
            liElement.appendChild(spanElement1);
            liElement.appendChild(spanElement2);

            // Agregar el nuevo <li> al elemento padre
            listClasses.appendChild(liElement);

        };

        const setCantClases = document.getElementById('set-cantClases');
        setCantClases.textContent = cantClasesTotal;

        const setCantHoras = document.getElementById('set-cantHoras');
        setCantHoras.textContent = curso.duration;

    });