let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            ${item.name} - R$ ${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItems.appendChild(listItem);
    });

    document.getElementById('total-price').innerText = `Total: R$ ${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    updateCart();
}
