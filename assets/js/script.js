// Function to create and show the offcanvas
document.getElementById('btn').onclick = function () {
    createOffcanvas();
};

// Function to create the offcanvas
function createOffcanvas() {
    let offcanvas = document.getElementById('offcanvas');
    if (!offcanvas) {  // Check if offcanvas already exists
        offcanvas = document.createElement('div');
        offcanvas.className = 'offcanvas offcanvas-end show';
        offcanvas.tabIndex = '-1';
        offcanvas.id = 'offcanvas';
        offcanvas.setAttribute('aria-labelledby', 'offcanvasLabel');
        offcanvas.innerHTML = `  
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h4 class="text-center fw-bold pb-3">Your Cart</h4>
                <hr>
                <div id="cart-items"></div>
                <h5 class="js-head">Total $0.00</h5>
                <button type="submit" class="submit-js btn btn-primary text-white text-center" id="btn-submit">Buy Now</button>
            </div>`;
        document.body.appendChild(offcanvas);
    }
    // order placed
    document.getElementById('btn-submit').onclick = function submit() {
        window.alert('Order Placed Successfully!');
        // Clear the cart
        const cartItemsContainer = document.getElementById('cart-items');
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';  // Remove all child elements
        }
        // Update the total price display to $0
        const totalElement = document.querySelector('.js-head');
        if (totalElement) {
            totalElement.textContent = 'Total $0.00';
        }
    }
    // Show the offcanvas
    let offcanvasElement = new bootstrap.Offcanvas(offcanvas);
    offcanvasElement.show();
}

// Function to add the product element to the offcanvas
function btnfunction(imgsrc, productname, price) {
    createOffcanvas();  // Ensure the offcanvas is created before adding the product

    // Create the product element
    const element = document.createElement('div');
    element.className = 'container d-flex justify-content-around product-item';
    element.innerHTML = `
        <div>
            <img src="${imgsrc}" alt="${productname}" class="img-prod-offcanvas">
        </div>
        <div class="data">
            <h5 class="fw-bold">${productname}</h5>
            <h5 class="price">$${price.toFixed(2)}</h5>
            <input type="number" value="1" min="1" class="form-control" onchange="updateTotal()">
        </div>`;

    // Append the new element to the offcanvas body
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.appendChild(element);

    // Update the total price after adding the item
    updateTotal();
}

// Function to update the total price
function updateTotal() {
    let total = 0;

    // Select all product items within cart-items
    const productItems = document.querySelectorAll('#cart-items .product-item');
    
    productItems.forEach(item => {
        // Get the price
        const priceText = item.querySelector('.price').textContent.trim().replace('$', '');
        const price = parseFloat(priceText);

        // Get the quantity
        const quantity = parseInt(item.querySelector('input[type="number"]').value);

        if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
        }
    });

    // Update the total price display
    const totalElement = document.querySelector('.js-head');
    if (totalElement) {
        totalElement.textContent = `Total $${total.toFixed(2)}`;
    }
}


// Initialize buttons
document.getElementById('btn-1').onclick = function () {
    btnfunction('assets/img/product1.avif', 'Sneaker', 78.91);
};

document.getElementById('btn-2').onclick = function () {
    btnfunction('assets/img/product2.webp', 'Joggers', 78.91);
};
document.getElementById('btn-3').onclick = function () {
    btnfunction('assets/img/product3.jpg', 'Heels', 56.91);
}
document.getElementById('btn-4').onclick = function () {
    btnfunction('assets/img/product4-Photoroom.png', 'Heels', 78.91);

}
document.getElementById('btn-5').onclick = function () {
    btnfunction('assets/img/product5.webp', 'sneaker', 78.91);

}
document.getElementById('btn-6').onclick = function () {
    btnfunction('assets/img/product6.webp', 'joggers', 78.91);

}
document.getElementById('btn-7').onclick = function () {
    btnfunction('assets/img/product7.jpg', 'Sandles', 78.91);

}
document.getElementById('btn-8').onclick = function () {
    btnfunction('assets/img/product7.jpg', 'Sandles', 78.91);

}
document.getElementById('btn-9').onclick = function () {
    btnfunction('assets/img/product1.avif', 'sneaker', 78.91);

}
document.getElementById('btn-10').onclick = function () {
    btnfunction('assets/img/product2.webp', 'Joggers', 78.91);

}

document.getElementById('btn-11').onclick = function () {
    btnfunction('assets/img/product3.jpg', 'Heels', 78.91);

}

document.getElementById('btn-12').onclick = function () {
    btnfunction('assets/img/product4-Photoroom.png', 'Heels', 78.91);

}


