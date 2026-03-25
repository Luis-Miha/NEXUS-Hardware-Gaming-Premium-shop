// Shared Cart Management
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM Elements (common across pages)
const cartBtn = document.querySelector(".cart-btn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartFooter = document.getElementById("cartFooter");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.querySelector(".cart-count");

// Cart Functions
function addToCart(productId) {
  // Import products from data module
  import("./data.js").then(({ products }) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    openCart();
  });
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartCount) {
    cartCount.textContent = totalItems;
  }

  if (cart.length === 0) {
    if (cartItems) {
      cartItems.innerHTML = '<div class="cart-empty">Il carrello è vuoto</div>';
    }
    if (cartFooter) {
      cartFooter.style.display = "none";
    }
  } else {
    if (cartItems) {
      cartItems.innerHTML = cart
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.brand} ${item.name}" class="cart-item-image" loading="lazy">
          <div class="cart-item-details">
            <p class="cart-item-name">${item.brand} ${item.name}</p>
            <p class="cart-item-price">€${(item.price * item.quantity).toFixed(2)} ${item.quantity > 1 ? `(x${item.quantity})` : ""}</p>
            <button class="cart-item-remove" data-id="${item.id}">Rimuovi</button>
          </div>
        </div>
      `,
        )
        .join("");

      if (cartFooter) {
        cartFooter.style.display = "block";
      }
      if (cartTotal) {
        cartTotal.textContent = `€${totalPrice.toFixed(2)}`;
      }

      // Add event listeners for remove buttons
      cartItems.querySelectorAll(".cart-item-remove").forEach((btn) => {
        btn.addEventListener("click", () => {
          removeFromCart(parseInt(btn.dataset.id));
        });
      });
    }
  }
}

function openCart() {
  if (cartSidebar) {
    cartSidebar.classList.add("active");
  }
  if (cartOverlay) {
    cartOverlay.classList.add("active");
  }
  document.body.style.overflow = "hidden";
}

function closeCartSidebar() {
  if (cartSidebar) {
    cartSidebar.classList.remove("active");
  }
  if (cartOverlay) {
    cartOverlay.classList.remove("active");
  }
  document.body.style.overflow = "";
}

function goToCheckout() {
  if (cart.length === 0) {
    alert("Il carrello è vuoto. Aggiungi prima alcuni prodotti.");
    return;
  }
  window.location.href = "checkout.html";
}

function buyNow(productId) {
  // Import products from data module
  import("./data.js").then(({ products }) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    cart = [
      {
        id: product.id,
        brand: product.brand,
        name: product.name,
        specs: product.specs,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    ];

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    window.location.href = "checkout.html";
  });
}

// Initialize cart on page load
function initCart() {
  updateCart();
}

// Event Listeners (common across pages)
if (cartBtn) {
  cartBtn.addEventListener("click", openCart);
}
if (closeCart) {
  closeCart.addEventListener("click", closeCartSidebar);
}
if (cartOverlay) {
  cartOverlay.addEventListener("click", closeCartSidebar);
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCartSidebar();
    const searchOverlay = document.getElementById("searchOverlay");
    if (searchOverlay) {
      searchOverlay.classList.remove("active");
    }
  }
});

export {
  cart,
  addToCart,
  removeFromCart,
  updateCart,
  openCart,
  closeCartSidebar,
  goToCheckout,
  buyNow,
  initCart,
};
