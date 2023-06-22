const btnAddCourse = document.getElementById('btn-addcourse');

btnAddCourse.addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('id');

    const dato = localStorage.getItem("cart");

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/cursos/' + cursoId + '.json')
    .then(response => response.json())
    .then(curso => {
        const datos = {
            "name": curso.name,
            "image": curso.image,
            "duration": curso.duration,
            "price": curso.price
        }
        return datos;
    })
    .then(datos => saveDato(datos));

    function saveDato(datos) {
        if (dato !== null) {
            // El dato existe en el localStorage
    
            let datosCart = localStorage.getItem("cart");
            const cart = JSON.parse(datosCart);
    
            var encontre = cart.find(e => e.name == datos.name);
    
            if(!encontre) {
                saveItemCart(cart);
            }
    
        } else {
            // El dato no existe en el localStorage
            let cart = [];
            saveItemCart(cart);
        }

        function saveItemCart(cart) {
            cart.push({
                "name":datos.name,
                "image": datos.image,
                "duration": datos.duration,
                "price": datos.price
            });
    
            let arrayCart = JSON.stringify(cart);
            localStorage.setItem("cart", arrayCart);
    
            btnAddCourse.textContent = 'Curso en el carrito';
            btnAddCourse.disabled = true;
            btnAddCourse.style.pointerEvents = "none";

            // Crear el elemento <div> del toast
            const toastDiv = document.createElement("div");
            toastDiv.setAttribute("style", "margin: 10px 0; background: #2da16b !important;");
            toastDiv.setAttribute("class", "toast align-items-center text-bg-primary border-0 fade show");
            toastDiv.setAttribute("role", "alert");
            toastDiv.setAttribute("aria-live", "assertive");
            toastDiv.setAttribute("aria-atomic", "true");

            // Crear el elemento <div> dentro del toast
            const toastInnerDiv = document.createElement("div");
            toastInnerDiv.setAttribute("class", "d-flex");

            // Crear el elemento <div> del contenido del toast
            const toastBodyDiv = document.createElement("div");
            toastBodyDiv.setAttribute("class", "toast-body");
            toastBodyDiv.textContent = "¡ Curso agregado al carrito !";

            // Crear el elemento <button> para cerrar el toast
            const closeButton = document.createElement("button");
            closeButton.setAttribute("type", "button");
            closeButton.setAttribute("class", "btn-close btn-close-white me-2 m-auto");
            closeButton.setAttribute("data-bs-dismiss", "toast");
            closeButton.setAttribute("aria-label", "Close");

            // Agregar el elemento de contenido del toast al elemento de toast interno
            toastInnerDiv.appendChild(toastBodyDiv);
            toastInnerDiv.appendChild(closeButton);

            // Agregar el elemento de toast interno al elemento de toast
            toastDiv.appendChild(toastInnerDiv);

            // Agregar el elemento de toast al contenedor deseado
            const alertAdd = document.getElementById('alert-itemAddCart');
            alertAdd.appendChild(toastDiv);

            // Mostrar el toast
            toastDiv.style.transform = "translateX(0)";
            toastDiv.style.transition = "transform 1s";

            // Esperar 3 segundos y luego iniciar la animación de desaparición
            setTimeout(() => {
                toastDiv.style.transform = "translateX(-110%)";
            }, 3000);
            
            // Eliminar el toast después de completar la animación de desaparición
            setTimeout(() => {
                toastDiv.remove();
            }, 3500);

        }
    }

})