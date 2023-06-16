function obtenerDatos() {

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/cursos.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-courses-container');

            cardsContainer.innerHTML = ''; //limpia todo lo que hay en la card anterior(esto hace que siempre que se ejecute la funcion la card cargue de nuevo y no muestre info que ya tenga cargado)
            
            for (let key in data) {  //La variable data contiene los datos en formato JSON que se obtienen utilizando la función fetch.
                const objeto = data[key]; //se utiliza para recorrer los objetos dentro de data. En cada iteración, la variable key tomará el valor de una de las propiedades de data. La variable objeto se utiliza para almacenar el objeto que se encuentra en la posición key de data.

                // Crear los elementos HTML para la card
                const card = document.createElement('div');  //Aquí se está creando un nuevo elemento HTML div y asignándolo a la variable card. Luego se agrega la clase "card" a ese elemento utilizando el método classList.add().
                card.classList.add('card');

                // const imagen = document.createElement('img');
                // imagen.classList.add('card-img-top');
                // imagen.src = objeto.imagen;

                const cardBody = document.createElement('div');
                cardBody.classList.add('cardbody-course');

                const titulo = document.createElement('h5');
                titulo.classList.add('cardtitle-course');
                titulo.textContent = objeto["name"];

                // const duracion = document.createElement('p');
                // duracion.classList.add('card-text');
                // duracion.textContent = 'Duración: ' + objeto.duracion + ' horas';

                // const valor = document.createElement('p');
                // valor.classList.add('card-text');
                // valor.textContent = 'Valor: $' + objeto.valor;

                cardBody.appendChild(titulo);
                // cardBody.appendChild(duracion);
                // cardBody.appendChild(valor);

                // card.appendChild(imagen);
                card.appendChild(cardBody);

                cardsContainer.appendChild(card);
            }
        });

  }

  obtenerDatos();

  setInterval(obtenerDatos, 5000);