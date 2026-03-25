// Import shared modules
import {
  products,
  getBadgeText,
  getStars,
  getCategoryName,
} from "./shared/data.js";
import {
  cart,
  addToCart,
  updateCart,
  goToCheckout,
  buyNow,
} from "./shared/cart.js";
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
const productTitle = document.getElementById("productTitle");
const productBrand = document.getElementById("productBrand");
const productName = document.getElementById("productName");
const productSpecs = document.getElementById("productSpecs");
const productImage = document.getElementById("productImage");
const productStars = document.getElementById("productStars");
const productReviews = document.getElementById("productReviews");
const productPrice = document.getElementById("productPrice");
const productOriginalPrice = document.getElementById("productOriginalPrice");
const productDescription = document.getElementById("productDescription");
const productFeatures = document.getElementById("productFeatures");
const productCompatibility = document.getElementById("productCompatibility");
const breadcrumbCategory = document.getElementById("breadcrumbCategory");
const breadcrumbProduct = document.getElementById("breadcrumbProduct");
const relatedProductsGrid = document.getElementById("relatedProductsGrid");
const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));
const product = products.find((p) => p.id === productId);

if (!product) {
  // Redirect to home if product not found
  window.location.href = "index.html";
}

// Render Product Detail
function renderProductDetail() {
  if (!product) return;

  // Update page title
  productTitle.textContent = `${product.brand} ${product.name} | NEXUS`;

  // Update product info
  productBrand.textContent = product.brand;
  productName.textContent = product.name;
  productSpecs.textContent = product.specs;
  productImage.src = product.image;
  productImage.alt = `${product.brand} ${product.name}`;

  // Update rating
  productStars.innerHTML = getStars(product.rating);
  productReviews.textContent = `(${product.reviews} recensioni)`;

  // Update price
  productPrice.textContent = `€${product.price.toFixed(2)}`;
  if (product.originalPrice) {
    productOriginalPrice.textContent = `€${product.originalPrice.toFixed(2)}`;
    productOriginalPrice.style.display = "inline";
  } else {
    productOriginalPrice.style.display = "none";
  }

  // Update description and features
  productDescription.textContent = product.description;

  // Update features list
  productFeatures.innerHTML = product.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  // Update compatibility
  productCompatibility.textContent = product.compatibility;

  // Update breadcrumb
  breadcrumbCategory.textContent = getCategoryName(product.category);
  breadcrumbProduct.textContent = product.name;

  // Set up add to cart button
  addToCartBtn.onclick = () => addToCart(product.id);
  buyNowBtn.onclick = () => {
    buyNow(product.id);
  };

  // Render related products
  renderRelatedProducts();
}

function renderRelatedProducts() {
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  relatedProductsGrid.innerHTML = relatedProducts
    .map(
      (p) => `
      <article class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
        <div class="product-image">
          <img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy">
          ${p.badge ? `<span class="product-badge badge-${p.badge}">${getBadgeText(p.badge)}</span>` : ""}
          <div class="product-actions">
            <button class="add-to-cart" data-id="${p.id}">Aggiungi al carrello</button>
          </div>
        </div>
        <div class="product-info">
          <p class="product-brand">${p.brand}</p>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-specs">${p.specs}</p>
          <div class="product-rating">
            <span class="stars">${getStars(p.rating)}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <div class="product-price">
            <span class="price-current">€${p.price.toFixed(2)}</span>
            ${p.originalPrice ? `<span class="price-original">€${p.originalPrice.toFixed(2)}</span>` : ""}
          </div>
        </div>
      </article>
    `,
    )
    .join("");

  // Add click events to related product add-to-cart buttons
  relatedProductsGrid.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

// Checkout button event listener
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("checkout-btn")) {
    goToCheckout();
  }
});

// Initial render
renderProductDetail();
