let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
    alert('product has been added to the cart.');
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';  // Clear previous cart items
    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent ='${index + 1}. product';
        cartElement.appendChild(listItem);
    });
}