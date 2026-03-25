// Import shared modules
import { products, getBadgeText, getStars } from "./shared/data.js";
import { cart, addToCart, updateCart, goToCheckout } from "./shared/cart.js";
import { openSearch, closeSearchOverlay } from "./shared/utils.js";

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
const productsGrid = document.getElementById("productsGrid");
const categoryChips = document.querySelectorAll(".category-chip");
const sortSelect = document.getElementById("sortSelect");

// Render Products
function renderProducts(productsToRender) {
  productsGrid.innerHTML = productsToRender
    .map(
      (product) => `
    <article class="product-card" data-id="${product.id}" onclick="window.location.href='product.html?id=${product.id}'">
      <div class="product-image">
        <img src="${product.image}" alt="${product.brand} ${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge badge-${product.badge}">${getBadgeText(product.badge)}</span>` : ""}
        <div class="product-actions">
          <button class="add-to-cart" data-id="${product.id}">Aggiungi al carrello</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-brand">${product.brand}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-specs">${product.specs}</p>
        <div class="product-rating">
          <span class="stars">${getStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">€${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="price-original">€${product.originalPrice.toFixed(2)}</span>` : ""}
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  // Add click events to add-to-cart buttons
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

// Filter & Sort
function filterProducts(category) {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

function sortProducts(productsToSort, sortBy) {
  const sorted = [...productsToSort];
  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

let currentCategory = "all";

function updateProducts() {
  let filtered = filterProducts(currentCategory);
  let sorted = sortProducts(filtered, sortSelect.value);
  renderProducts(sorted);
}

// Event Listeners
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("checkout-btn")) {
    goToCheckout();
  }
});

categoryChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    categoryChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentCategory = chip.dataset.category;
    updateProducts();
  });
});

sortSelect.addEventListener("change", updateProducts);

// Initial render
renderProducts(products);
