setTimeout(function() {
var dato = localStorage.getItem("cart");

if (dato !== null) {
    // El dato existe en el localStorage
    const btnAddCourse = document.getElementById('btn-addcourse');

    const cart = JSON.parse(dato);
    const name = document.getElementById('tittle-course');
    console.log(name.textContent);

    var encontre = false;

    cart.map(e => { 
        console.log(e);
        console.log(name.textContent)
        console.log(e === name)
        if(e === name.textContent) {
            encontre = true;
        } 
    });

    if(encontre) {
        btnAddCourse.textContent = 'Curso en el carrito';
        btnAddCourse.disabled = true;
        btnAddCourse.style.pointerEvents = "none";
    }

}
}, 1000);