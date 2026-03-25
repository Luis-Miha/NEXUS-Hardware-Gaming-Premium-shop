// Import shared modules
import { products } from "./shared/data.js";
import { cart, updateCart } from "./shared/cart.js";
import {
  validateForm,
  showProcessing,
  showSuccess,
  closeModal,
  togglePaymentForm,
} from "./shared/utils.js";

// Initialize cart on page load
updateCart();

// Sticky Header with Shadow on Scroll
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
let lastScrollY = 0;

function handleStickyHeader() {
  const scrollY = window.scrollY;

  // Add sticky class when header detaches from original position
  if (scrollY > 0) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }

  lastScrollY = scrollY;
}

// Throttle scroll event for better performance
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleStickyHeader();
      ticking = false;
    });
    ticking = true;
  }
});

// Initial check
handleStickyHeader();

// DOM Elements
const checkoutForm = document.getElementById("checkoutForm");
const paymentForm = document.getElementById("paymentForm");
const summaryItems = document.getElementById("summaryItems");
const summarySubtotal = document.getElementById("summarySubtotal");
const summaryShipping = document.getElementById("summaryShipping");
const summaryVAT = document.getElementById("summaryVAT");
const summaryTotal = document.getElementById("summaryTotal");
const successModal = document.getElementById("successModal");

// Initialize checkout page
function initCheckout() {
  if (cart.length === 0) {
    // Redirect to home if cart is empty
    window.location.href = "index.html";
  }

  renderSummary();
  setupEventListeners();
}

// Render Order Summary
function renderSummary() {
  summaryItems.innerHTML = cart
    .map(
      (item) => `
      <div class="summary-item">
        <img src="${item.image}" alt="${item.brand} ${item.name}" />
        <div class="summary-item-info">
          <h4>${item.brand} ${item.name}</h4>
          <p>${item.specs}</p>
          <span>€${item.price.toFixed(2)} x ${item.quantity}</span>
        </div>
        <div class="summary-item-price">
          €${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    `,
    )
    .join("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 99 ? 0 : 9.99;
  const vat = (subtotal + shipping) * 0.22;
  const total = subtotal + shipping + vat;

  summarySubtotal.textContent = `€${subtotal.toFixed(2)}`;
  summaryShipping.textContent =
    shipping === 0 ? "GRATIS" : `€${shipping.toFixed(2)}`;
  summaryVAT.textContent = `€${vat.toFixed(2)}`;
  summaryTotal.textContent = `€${total.toFixed(2)}`;
}

// Setup Event Listeners
function setupEventListeners() {
  // Form submission
  checkoutForm.addEventListener("submit", handleCheckout);
}

// Handle Checkout
function handleCheckout(e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(checkoutForm);
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    postalCode: formData.get("postalCode"),
    country: formData.get("country"),
    paymentMethod: formData.get("payment"),
    cardNumber: formData.get("cardNumber"),
    cardName: formData.get("cardName"),
    expiryDate: formData.get("expiryDate"),
    cvv: formData.get("cvv"),
    orderTotal: summaryTotal.textContent,
    items: cart,
  };

  // Validate form
  if (!validateForm(data)) {
    return;
  }

  // Simulate processing
  showProcessing();

  setTimeout(() => {
    // Clear cart
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show success
    showSuccess();
  }, 2000);
}

// Initialize
initCheckout();
