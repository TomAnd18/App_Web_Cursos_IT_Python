function obtenerDatos() {

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/cursos.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-courses-container');

            // cardsContainer.innerHTML = '';
            
            for (let key in data) {  //La variable data contiene los datos en formato JSON que se obtienen utilizando la función fetch.
                const objeto = data[key]; //se utiliza para recorrer los objetos dentro de data. En cada iteración, la variable key tomará el valor de una de las propiedades de data. La variable objeto se utiliza para almacenar el objeto que se encuentra en la posición key de data.

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

                const qualification = document.createElement('span');
                qualification.textContent = "⭐" + objeto["qualification"];

                const views = document.createElement('h6');
                views.textContent = "(+ " + objeto['views'].toLocaleString('es-AR') + " vistas)";


                qualiAndViewsContainer.appendChild(qualification);
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
        });

  }

  obtenerDatos();

//   setInterval(obtenerDatos, 5000);