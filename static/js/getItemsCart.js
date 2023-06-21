function getDataCart() {
    // const divPadre = document.getElementById('container-global-cart');
    // divPadre.innerHTML = '';

    const dato = localStorage.getItem("cart");

    if (dato !== null) {
        const cart = JSON.parse(dato);

        // Obtener el elemento contenedor global
        const containerGlobalCart = document.querySelector('.container-global-cart');

        // Crear el elemento contenedor principal del carrito
        const cartContainerOne = document.createElement('div');
        cartContainerOne.classList.add('cart-container-one');

        // Crear el elemento contenedor de los elementos del carrito
        const cartContainerItems = document.createElement('div');
        cartContainerItems.classList.add('cart-container-items');

        // Crear el elemento de título "Mi Carrito"
        const cartTitle = document.createElement('h3');
        cartTitle.textContent = 'Mi Carrito';

        // Crear el elemento que muestra la cantidad de cursos en la cesta
        const cartItemCount = document.createElement('span');
        cartItemCount.id = 'cantCart-setCart'
        cartItemCount.textContent = cart.length + ' cursos en el carrito';

        // Crear el elemento contenedor de los ítems del carrito
        const itemsCartContainer = document.createElement('div');
        itemsCartContainer.classList.add('items-cart-container');

        cart.map(e => {

            // Crear el elemento contenedor de un ítem del carrito
            const itemCartContainer = document.createElement('div');
            itemCartContainer.classList.add('item-cart-container');

            // Crear el elemento contenedor de la imagen y la información del ítem
            const imgInfoContainer = document.createElement('div');
            imgInfoContainer.classList.add('img-info-container');

            // Crear el elemento contenedor de la imagen del ítem
            const itemImgContainer = document.createElement('div');
            itemImgContainer.classList.add('item-img-container');

            // Crear la imagen del ítem
            const itemImg = document.createElement('img');
            itemImg.id = 'img-setCart';
            itemImg.src = e.image;
            itemImg.alt = 'course';

            itemImgContainer.appendChild(itemImg);

            // Crear el elemento contenedor de la información del ítem
            const itemInfoContainer = document.createElement('div');
            itemInfoContainer.classList.add('item-info-container');

            // Crear el título del ítem
            const itemName = document.createElement('h2');
            itemName.id = 'name-setCart';
            itemName.textContent = e.name;

            // Crear el texto con la duración y el número de clases del ítem
            const itemDurationClasses = document.createElement('h6');
            const itemDuration = document.createElement('span');
            itemDuration.id = 'horas-setCart';
            itemDuration.textContent = e.duration;
            const itemClasses = document.createElement('span');
            itemClasses.id = 'clases-setCart';
            itemClasses.textContent = '692';
            itemDurationClasses.appendChild(itemDuration);
            itemDurationClasses.textContent += ' horas en total - ';
            itemDurationClasses.appendChild(itemClasses);
            itemDurationClasses.textContent += ' clases - Todos los niveles';

            itemInfoContainer.appendChild(itemName);
            itemInfoContainer.appendChild(itemDurationClasses);

            imgInfoContainer.appendChild(itemImgContainer);
            imgInfoContainer.appendChild(itemInfoContainer);

            // Crear el elemento contenedor de las opciones y el precio del ítem
            const optionPriceContainer = document.createElement('div');
            optionPriceContainer.classList.add('option-price-container');

            // Crear el enlace de "Eliminar" del ítem
            const deleteLink = document.createElement('a');
            deleteLink.href = '#!';
            deleteLink.id = 'delete-itemCart';
            deleteLink.textContent = 'Eliminar';
            // Agrega el evento de clic al elemento <a>
            deleteLink.addEventListener('click', () => {
                console.log('Item deleted');
        
                let cart = JSON.parse(localStorage.getItem('cart'));
                console.log(cart)
                const elementoAEliminar = e.name;
                const indice = cart.findIndex(item => item.name === elementoAEliminar);
        
                if (indice !== -1) {
                    cart.splice(indice, 1);
                }

                localStorage.setItem('cart', JSON.stringify(cart));

                if (cart.length === 0) {
                    localStorage.removeItem("cart");

                    itemCartContainer.remove();
                    window.location.href = '/cart';
                }

                itemCartContainer.remove();

                //Recalcular precio total
                var cantPriceTotal = 0;
                cart.map(e => cantPriceTotal += e.price);

                const precioTotal = document.getElementById('price-total-setCart');
                precioTotal.textContent = 'Total: ' + cantPriceTotal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

                //Recalcular cantidad de items
                const cantItemsTotal = document.getElementById('cantCart-setCart');
                cantItemsTotal.textContent = cart.length + ' cursos en el carrito';
            });

            // Crear el precio del ítem
            const itemPrice = document.createElement('span');
            itemPrice.id = 'price-setCart';
            itemPrice.textContent = e.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

            optionPriceContainer.appendChild(deleteLink);
            optionPriceContainer.appendChild(itemPrice);

            itemCartContainer.appendChild(imgInfoContainer);
            itemCartContainer.appendChild(optionPriceContainer);

            itemsCartContainer.appendChild(itemCartContainer);

        });

        // Crear el elemento contenedor de la sección de pago de cursos
        const payCoursesContainer = document.createElement('div');
        payCoursesContainer.classList.add('pay-courses-container');

        //Calcular precio total
        var cantTotal = 0;
        cart.map(e => cantTotal += e.price);

        // Crear el elemento que muestra el total a pagar
        const totalAmount = document.createElement('span');
        totalAmount.id = 'price-total-setCart'
        totalAmount.textContent = 'Total: '+ cantTotal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

        // Crear el botón de "Pagar"
        const payButton = document.createElement('button');
        payButton.textContent = 'Pagar';

        // Crear el elemento contenedor de la sección de cupón de descuento
        const cuponContainer = document.createElement('div');
        cuponContainer.classList.add('cupon-container');

        // Crear el título del cupón de descuento
        const cuponTitle = document.createElement('h3');
        cuponTitle.textContent = 'Cupón de descuento';

        // Crear el elemento contenedor del input y el botón del cupón de descuento
        const inputBtnCupon = document.createElement('div');
        inputBtnCupon.classList.add('input-btn-cupon');

        // Crear el input para ingresar el cupón
        const cuponInput = document.createElement('input');
        cuponInput.placeholder = 'Ingrese un cupón';
        cuponInput.type = 'text';
        cuponInput.maxLength = '8';

        // Crear el botón para aplicar el cupón
        const cuponButton = document.createElement('button');
        cuponButton.textContent = 'Aplicar';

        inputBtnCupon.appendChild(cuponInput);
        inputBtnCupon.appendChild(cuponButton);

        cuponContainer.appendChild(cuponTitle);
        cuponContainer.appendChild(inputBtnCupon);

        payCoursesContainer.appendChild(totalAmount);
        payCoursesContainer.appendChild(payButton);
        payCoursesContainer.appendChild(cuponContainer);

        cartContainerItems.appendChild(cartTitle);
        cartContainerItems.appendChild(cartItemCount);
        cartContainerItems.appendChild(itemsCartContainer);

        cartContainerOne.appendChild(cartContainerItems);
        cartContainerOne.appendChild(payCoursesContainer);

        // Agregar el carrito completo al contenedor global
        containerGlobalCart.appendChild(cartContainerOne);

    } else {

        // Obtener el elemento contenedor
        const containerGlobalCart = document.querySelector('.container-global-cart');

        // Crear el elemento contenedor del carrito vacío
        const cartEmptyContainer = document.createElement('div');
        cartEmptyContainer.classList.add('cart-empty-container');

        // Crear los elementos internos del carrito vacío
        const cartEmptyTitle = document.createElement('h3');
        cartEmptyTitle.textContent = 'El carrito está vacío';

        const cartEmptyText = document.createElement('p');
        cartEmptyText.textContent = 'Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?';

        const cartEmptyButton = document.createElement('button');
        const cartEmptyLink = document.createElement('a');
        cartEmptyLink.href = '/courses';

        const cartEmptyButtonText = document.createTextNode('Empezar');
        const cartEmptyButtonImage = document.createElement('img');
        cartEmptyButtonImage.src = '../static/images/arrow-right.svg';
        cartEmptyButtonImage.alt = 'arrow-right';

        cartEmptyLink.appendChild(cartEmptyButtonText);
        cartEmptyLink.appendChild(cartEmptyButtonImage);
        cartEmptyButton.appendChild(cartEmptyLink);

        cartEmptyContainer.appendChild(cartEmptyTitle);
        cartEmptyContainer.appendChild(cartEmptyText);
        cartEmptyContainer.appendChild(cartEmptyButton);

        // Agregar el carrito vacío al contenedor global
        containerGlobalCart.appendChild(cartEmptyContainer);

    }
}


// function addEventoBtnDelete(deleteLink) {
//     deleteLink.addEventListener('click', () => {
//         console.log('Item deleted');

//         let cart = JSON.parse(localStorage.getItem('cart'));
//         console.log(cart)
//         const elementoAEliminar = e.name;
//         const indice = cart.findIndex(item => item.name === elementoAEliminar);

//         if (indice !== -1) {
//             cart.splice(indice, 1);
//         }

//         localStorage.setItem('cart', JSON.stringify(cart));

//         getDataCart();
//     });
// }

getDataCart();

// setInterval(getDataCart, 1000);