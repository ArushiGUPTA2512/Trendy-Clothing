let cart = []; // Array to store cart items

// Function to add a product to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price }); // Add product to the cart array
    updateCart(); // Update the cart display
}

// Function to update the cart display
function updateCart() {
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the cart list
    let totalPrice = 0;

    // Loop through the cart and display each item
    cart.forEach(item => {
        totalPrice += item.price; // Add price to the total
        let listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
    });

    // Update the total price display
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add some products.');
    } else {
        alert('Proceeding to checkout... Total: $' + document.getElementById('total-price').textContent);
    }
}
