function getCantItems() {
    const divCant = document.getElementById('cantItemsCartNav');

    const dato = localStorage.getItem("cart");

    if (dato !== null) {
        const cart = JSON.parse(dato);

        divCant.textContent = cart.length;
        divCant.style.display = 'block';
    } else {
        divCant.style.display = 'none';
    }
}

getCantItems();

setInterval(getCantItems, 100);