const buyNowBtn = document.getElementById('btn-buynow');

buyNowBtn.addEventListener('click', () => {
    var dato = localStorage.getItem("user");

    if (dato === null) {
        const infor = document.getElementById('advertencia-login-buynow');
        infor.style.display = 'block';

        setTimeout(() => {
            infor.style.display = 'none';
        }, 5000);
        
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('id');

    // const dato = localStorage.getItem("cart");

    fetch('https://python-app-web-cursos-it-default-rtdb.firebaseio.com/cursos/' + cursoId + '.json')
    .then(response => response.json())
    .then(curso => {
        window.location.href = curso.pay_url;
        // const datos = {
        //     "name": curso.name,
        //     "image": curso.image,
        //     "duration": curso.duration,
        //     "price": curso.price
        // }
        // return datos;
    })
    // .then(datos => saveDato(datos));

    // function saveDato(datos) {
    //     if (dato !== null) {
    //         // El dato existe en el localStorage
    
    //         let datosCart = localStorage.getItem("cart");
    //         const cart = JSON.parse(datosCart);
    
    //         var encontre = cart.find(e => e.name == datos.name);
    
    //         if(!encontre) {
    //             saveItemCart(cart);
    //         }
    
    //     } else {
    //         // El dato no existe en el localStorage
    //         let cart = [];
    //         saveItemCart(cart);
    //     }

    //     window.location.href = '/cart';

    //     function saveItemCart(cart) {
    //         cart.push({
    //             "name":datos.name,
    //             "image": datos.image,
    //             "duration": datos.duration,
    //             "price": datos.price
    //         });
    
    //         let arrayCart = JSON.stringify(cart);
    //         localStorage.setItem("cart", arrayCart);
    //     }
    // }
});