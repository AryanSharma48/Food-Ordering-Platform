const checkoutBtn = document.querySelector(".checkout-css"); // your checkout button in cart
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.getElementById("close-checkout");
const checkoutTotal = document.getElementById("checkout-total");
const confirmCheckout = document.getElementById("confirm-checkout");

// Open modal when checkout clicked
checkoutBtn.addEventListener("click", () => {
  checkoutTotal.textContent = total.toFixed(2);
  checkoutModal.classList.add("active");
});

// Close modal when "x" clicked
closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.remove("active");
});

// Confirm checkout
confirmCheckout.addEventListener("click", () => {
  alert("✅ Order placed successfully!");
  cartItems = [];
  total = 0;
  updateCart();
  updateCartCount();
  checkoutModal.classList.remove("active");

  cart.classList.remove("open");
});
