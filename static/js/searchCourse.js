const searchForm = document.getElementById('form-search');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const buscar = document.getElementById('input-search-course').value;
 
    if (buscar.trim() === "") {
        return;
    }

    const cardsContainer = document.getElementById('cards-courses-container');

    if (cardsContainer === null) {
        return;
    }

    cardsContainer.innerHTML = '';
    cardsContainer.setAttribute("style", "display: grid !important;");

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/cursos.json')
        .then(response => response.json())
        .then(data => {
            const cursosEncontrados = [];

            for (let key in data) {
                const objeto = data[key];
                
                if (objeto.name.toLowerCase().includes(buscar.toLowerCase())) {
                    cursosEncontrados.push(key);

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

                    cardsContainer.appendChild(card);

                }

            }

            if(cursosEncontrados.length === 0) {
                cardsContainer.setAttribute("style", "display: flex !important;");

                const divInfoSearch = document.createElement('div');
                divInfoSearch.classList = 'sorry-nofound-container';

                const h5Info1 = document.createElement('h4');
                h5Info1.textContent = '¡ Lo sentimos !'
                const h5Info2 = document.createElement('h5');
                h5Info2.textContent = 'No tenemos el curso que estas buscando'

                divInfoSearch.appendChild(h5Info1);
                divInfoSearch.appendChild(h5Info2);

                cardsContainer.appendChild(divInfoSearch)
            }
        })

});