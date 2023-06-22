function validation() {
    var dato = localStorage.getItem("cart");

    if (dato !== null) {
        // El dato existe en el localStorage
        const btnAddCourse = document.getElementById('btn-addcourse');

        const cart = JSON.parse(dato);
        const name = document.getElementById('tittle-course');

        var encontre = false;

        cart.map(e => {
            if(e.name === name.textContent) {
                encontre = true;
            } 
        });

        if(encontre) {
            btnAddCourse.textContent = '';
            
            // Crear el elemento <svg>
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svg.setAttribute("width", "18");
            svg.setAttribute("height", "18");
            svg.setAttribute("fill", "currentColor");
            svg.setAttribute("class", "bi bi-bag-check");
            svg.setAttribute("viewBox", "0 0 16 16");

            // Crear el elemento <path> para el atributo "fill-rule"
            const pathFillRule = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathFillRule.setAttribute("fill-rule", "evenodd");
            pathFillRule.setAttribute("d", "M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0");

            // Crear el elemento <path> para el atributo "d"
            const pathD = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathD.setAttribute("d", "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z");

            // Agregar los elementos <path> al elemento <svg>
            svg.appendChild(pathFillRule);
            svg.appendChild(pathD);

            // Agregar el elemento <svg> al contenedor deseado
            btnAddCourse.appendChild(svg);
            
            const spanCursoAgregado = document.createElement('span');
            spanCursoAgregado.textContent = 'Curso en el carrito';
            btnAddCourse.appendChild(spanCursoAgregado);

            // btnAddCourse.textContent = ' Curso en el carrito';
            btnAddCourse.disabled = true;
            btnAddCourse.style.pointerEvents = "none";
        }

    }
}

setInterval(validation, 100);