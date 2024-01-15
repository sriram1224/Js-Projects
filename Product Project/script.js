const Products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
    { id: 4, name: 'Product-4', price: 400 },
];


const cart = {};


function renderProductList() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '<h2>Product List</h2>';

    Products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <p>${product.name}</p>
            <p>${product.price}</p>
            <div>
                <button onclick="addToCart(${product.id})">+</button>
                <span>${cart[product.id] || 0}</span>
                <button onclick="removeFromCart(${product.id})">-</button>
            </div>
        `;

        productListElement.appendChild(productItem);
    });

}

function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '<h2>Shopping Cart</h2>';

    if (Object.keys(cart).length === 0) {
        const noProductMessage = document.createElement('p');
        noProductMessage.textContent = 'No Product added to the cart';
        cartElement.appendChild(noProductMessage);
    } else {
        Object.keys(cart).forEach(productId => {
            const product = Products.find(p => p.id === parseInt(productId));
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <p>${product.name}</p>
                
                <span>${cart[productId]}</span>
                <p>Price: ${cart[productId]*product.price}</p>
            `;

            cartElement.appendChild(cartItem);
        });

        const totalPrice = document.createElement('p');
        totalPrice.textContent = `Total Price: ${calculateTotal()}`;
        cartElement.appendChild(totalPrice);
    }
}

function addToCart(productId) {
    cart[productId] = (cart[productId] || 0) + 1;

    renderProductList();
    renderCart();
}

function removeFromCart(productId) {
    if (cart[productId] > 0) {
        cart[productId]--;
        if (cart[productId] === 0) {
            delete cart[productId];
        }
        renderProductList();
        renderCart();
    }
}

function calculateTotal() {
    return Object.keys(cart).reduce((total, productId) => {
        const product = Products.find(p => p.id === parseInt(productId));
        return total + cart[productId] * product.price;
    }, 0);
}

renderProductList();
renderCart();