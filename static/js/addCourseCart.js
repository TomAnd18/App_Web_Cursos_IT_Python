const btnAddCourse = document.getElementById('btn-addcourse');

btnAddCourse.addEventListener('click', () => {
    var dato = localStorage.getItem("cart");

    const name = document.getElementById('tittle-course').textContent;

    if (dato !== null) {
        // El dato existe en el localStorage

        let cart = localStorage.getItem("cart");

        const miArrayRecuperado = JSON.parse(cart);

        var encontre = false;

        miArrayRecuperado.map(e => { 
            if(e == name) {
                encontre = true;
            } 
        });

        if(!encontre) {
            miArrayRecuperado.push(name);
            let arrayCart = JSON.stringify(miArrayRecuperado);
            localStorage.setItem("cart", arrayCart);

            btnAddCourse.textContent = 'Curso en el carrito';

            btnAddCourse.disabled = true;
            btnAddCourse.style.pointerEvents = "none";
        }

    } else {
        // El dato no existe en el localStorage

        let cart = [];
        cart.push(name);

        let arrayCart = JSON.stringify(cart);

        localStorage.setItem("cart", arrayCart);

        btnAddCourse.textContent = 'Curso en el carrito';
        
        btnAddCourse.disabled = true;
        btnAddCourse.style.pointerEvents = "none";
    }

})