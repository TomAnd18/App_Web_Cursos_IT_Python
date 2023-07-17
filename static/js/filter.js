const btnFilter = document.getElementById('btn-filter-courses');

btnFilter.addEventListener('click', () => {
    const cardsContainer = document.getElementById('cards-courses-container');
    cardsContainer.innerHTML = '';

    // Crear loading
    const divElement = document.createElement('div');

    divElement.id = 'loading-filtercourse';
    divElement.className = 'spinner-border m-5';
    divElement.setAttribute('role', 'status');

    const spanElement = document.createElement('span');
    spanElement.className = 'visually-hidden';
    spanElement.textContent = 'Loading...';

    divElement.appendChild(spanElement);
    cardsContainer.appendChild(divElement);



    const selectedCourses = document.querySelector('input[name="flexRadioDefault1"]:checked').id;
    const selectedDuration = document.querySelector('input[name="flexRadioDefault2"]:checked').id;

    const cardsContainerGlobal = document.getElementById('cards-courses-container');

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/cursos.json')
        .then(response => response.json())
        .then(data => {
            const loadingDiv = document.getElementById('loading-filtercourse');
            loadingDiv.style.display = 'none';
            
            for (let key in data) {
                const objeto = data[key];

                //TODOS LOS CURSOS
                if(selectedCourses === 'allcourses' && selectedDuration === 'allhours') {
                    createCardCourse(objeto, key);
                }
                
                if(selectedCourses === 'allcourses' && selectedDuration === 'menor200') {
                    if(objeto['duration'] < 200) {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'allcourses' && selectedDuration === '200a300') {
                    if(objeto['duration'] >= 200 && objeto['duration'] <= 300) {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'allcourses' && selectedDuration === 'mayor300') {
                    if(objeto['duration'] > 300) {
                        createCardCourse(objeto, key);
                    }
                }

                //FRONTEND
                if(selectedCourses === 'frontend' && selectedDuration === 'allhours') {
                    if(objeto['stack'] === 'frontend') {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'frontend' && selectedDuration === 'menor200') {
                    if(objeto['stack'] === 'frontend' && objeto['duration'] < 200) {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'frontend' && selectedDuration === '200a300') {
                    if(objeto['stack'] === 'frontend' && objeto['duration'] >= 200 && objeto['duration'] <= 300) {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'frontend' && selectedDuration === 'mayor300') {
                    if(objeto['stack'] === 'frontend' && objeto['duration'] > 300) {
                        createCardCourse(objeto, key);
                    }
                }

                //BACKEND
                if(selectedCourses === 'backend' && selectedDuration === 'allhours') {
                    if(objeto['stack'] === 'backend') {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'backend' && selectedDuration === 'menor200') {
                    if(objeto['stack'] === 'backend' && objeto['duration'] < 200) {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'backend' && selectedDuration === '200a300') {
                    if(objeto['stack'] === 'backend' && objeto['duration'] >= 200 && objeto['duration'] <= 300) {
                        createCardCourse(objeto, key);
                    }
                }
                
                if(selectedCourses === 'backend' && selectedDuration === 'mayor300') {
                    if(objeto['stack'] === 'backend' && objeto['duration'] > 300) {
                        createCardCourse(objeto, key);
                    }
                }

            }
        })
        .catch(error => console.log(error))

    function createCardCourse(objeto, key) {
        const card = document.createElement('div');
        card.classList.add('card-course');

        card.addEventListener('click', function() {
            window.location.href = '/details?id=' + key;
        });

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-course-container');

        const imagen = document.createElement('img');
        imagen.src = objeto.image;


        const cardBody = document.createElement('div');
        cardBody.classList.add('cardbody-course');

        const price = document.createElement('h2');
        price.textContent = objeto['price'].toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

        const titulo = document.createElement('h3');
        titulo.classList.add('cardtitle-course');
        titulo.textContent = objeto["name"];

        const description = document.createElement('p');
        description.textContent = objeto["description"];


        const qualiAndViewsContainer = document.createElement('div');
        qualiAndViewsContainer.classList.add('quali-views-container');

        const qualiContainer = document.createElement('div');

        // Crear el elemento <svg>
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("style", "margin-right: 5px; position: relative; top: -2px; color: #fcd53f");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", "16");
        svg.setAttribute("height", "16");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("class", "bi bi-star-fill");
        svg.setAttribute("viewBox", "0 0 16 16");

        // Crear el elemento <path> para el atributo "d"
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256");

        // Agregar el elemento <path> al elemento <svg>
        svg.appendChild(path);

        // Agregar el elemento <svg> al contenedor deseado
        qualiContainer.appendChild(svg);

        const qualification = document.createElement('span');
        qualification.textContent = objeto["qualification"];

        qualiContainer.appendChild(qualification);

        const views = document.createElement('h6');
        views.textContent = "(+ " + objeto['views'].toLocaleString('es-AR') + " alumnos)";


        qualiAndViewsContainer.appendChild(qualiContainer);
        qualiAndViewsContainer.appendChild(views);

        cardBody.appendChild(price);
        cardBody.appendChild(titulo);
        cardBody.appendChild(description);
        cardBody.appendChild(qualiAndViewsContainer);
        imgContainer.appendChild(imagen);
        card.appendChild(imgContainer);
        card.appendChild(cardBody);

        cardsContainerGlobal.appendChild(card);
    }
})