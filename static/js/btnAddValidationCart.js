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
            btnAddCourse.textContent = 'Curso en el carrito';
            btnAddCourse.disabled = true;
            btnAddCourse.style.pointerEvents = "none";
        }

    }
}

setInterval(validation, 100);