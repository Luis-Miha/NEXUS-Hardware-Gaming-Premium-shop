// Shared Utility Functions

// DOM Elements (common across pages)
const searchBtn = document.querySelector(".search-btn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

// Search Overlay Functions
function openSearch() {
  if (searchOverlay) {
    searchOverlay.classList.add("active");
    const searchInput = searchOverlay.querySelector(".search-input");
    if (searchInput) {
      searchInput.focus();
    }
  }
}

function closeSearchOverlay() {
  if (searchOverlay) {
    searchOverlay.classList.remove("active");
  }
}

// Event Listeners for search
if (searchBtn) {
  searchBtn.addEventListener("click", openSearch);
}
if (closeSearch) {
  closeSearch.addEventListener("click", closeSearchOverlay);
}
if (searchOverlay) {
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearchOverlay();
    }
  });
}

// Toast Notifications
function showAddToCartToast() {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "Prodotto aggiunto al carrello!";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 2000);
}

// Modal Functions
function showSuccess() {
  const modal = document.getElementById("successModal");
  if (modal) {
    modal.innerHTML = `
      <div class="modal-icon success">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#10b981" stroke-width="2" />
          <path d="M8 12l3 3 7-7" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <h3>Ordine Completato!</h3>
      <p>Grazie per il tuo acquisto. La conferma è stata inviata alla tua email.</p>
      <div class="modal-actions">
        <button class="modal-btn primary" onclick="window.location.href = 'index.html'">Torna allo Shop</button>
        <button class="modal-btn secondary" onclick="closeModal()">Chiudi</button>
      </div>
    `;
    modal.classList.add("active");
  }
}

function closeModal() {
  const successModal = document.getElementById("successModal");
  if (successModal) {
    successModal.classList.remove("active");
    setTimeout(() => {
      successModal.style.display = "none";
    }, 300);
  }
}

// Form Validation
function validateForm(data) {
  const errors = [];

  if (!data.firstName || !data.lastName) {
    errors.push("Nome e cognome sono obbligatori");
  }

  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    errors.push("Email non valida");
  }

  if (!data.phone) {
    errors.push("Telefono è obbligatorio");
  }

  if (!data.address) {
    errors.push("Indirizzo è obbligatorio");
  }

  if (!data.city) {
    errors.push("Città è obbligatoria");
  }

  if (!data.postalCode) {
    errors.push("Codice postale è obbligatorio");
  }

  if (!data.country) {
    errors.push("Paese è obbligatorio");
  }

  if (data.paymentMethod === "card") {
    if (!data.cardNumber || data.cardNumber.replace(/\s/g, "").length !== 16) {
      errors.push("Numero carta non valido");
    }
    if (!data.cardName) {
      errors.push("Intestatario è obbligatorio");
    }
    if (!data.expiryDate || !/^\d{2}\/\d{2}$/.test(data.expiryDate)) {
      errors.push("Data di scadenza non valida (formato MM/YY)");
    }
    if (!data.cvv || data.cvv.length !== 3) {
      errors.push("CVV non valido");
    }
  }

  if (errors.length > 0) {
    alert("Errori nel modulo:\n" + errors.join("\n"));
    return false;
  }

  return true;
}

// Processing State
function showProcessing() {
  const submitBtn = document.querySelector("#checkoutForm .checkout-btn");
  if (submitBtn) {
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Elaborazione...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Re-enable after 2 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }, 2000);
  }
}

// Payment Form Toggle
function togglePaymentForm() {
  const paymentMethod = document.querySelector('input[name="payment"]:checked');
  const paymentForm = document.getElementById("paymentForm");
  if (paymentMethod && paymentForm) {
    if (paymentMethod.value === "card") {
      paymentForm.style.display = "block";
    } else {
      paymentForm.style.display = "none";
    }
  }
}

// Event Listeners for payment
document.querySelectorAll('input[name="payment"]').forEach((radio) => {
  radio.addEventListener("change", togglePaymentForm);
});

export {
  openSearch,
  closeSearchOverlay,
  showAddToCartToast,
  showSuccess,
  closeModal,
  validateForm,
  showProcessing,
  togglePaymentForm,
};
