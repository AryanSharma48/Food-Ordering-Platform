const cart = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartIcon= document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");

let cartItems = [];
let total = 0;

let totalItems = 0;

// Toggle cart when clicking navbar icon
cartIcon.addEventListener("click", () => {
    cart.classList.toggle("open");
});

// Update the cart item count badge
function updateCartCount() {
    totalItems = 0;
    cartItems.forEach(item => {
        totalItems += item.quantity;
    });
    cartCount.textContent = totalItems;
}

// Open cart when Add to Cart clicked
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        const menuCard = button.closest(".menu-card");
        const name = menuCard.querySelector("h3").textContent;
        const price = parseFloat(menuCard.querySelector(".price").textContent.replace("$", ""));

        addToCart(name, price);
        openCart();
    });
});

// Add item function
function addToCart(name, price) {
    // Check if item already exists
    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }

    total += price;
    updateCart();
    updateCartCount();
}

// Update cart UI
function updateCart() {
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
      <div class="quantity-controls">
        <button onclick="decreaseQuantity(${index})">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity(${index})">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
}

function increaseQuantity(index) {
  cartItems[index].quantity += 1;
  total += cartItems[index].price;
  updateCart();
  updateCartCount();
}

function decreaseQuantity(index) {
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity -= 1;
    total -= cartItems[index].price;
  } else {
    // If only 1 left remove item
    total -= cartItems[index].price;
    cartItems.splice(index, 1);
  }
  updateCart();
  updateCartCount();
}




// Remove item
function removeFromCart(index) {
    total -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
    updateCartCount();
}

// Open and close cart
function openCart() {
    cart.classList.add("open");
}

closeCart.addEventListener("click", () => {
    cart.classList.remove("open");
});