// Price mapping for downloads
const priceMap = {
  10: 10,
  25: 19,
  50: 39,
  99: 69,
};

// Select all radio inputs
const radios = document.querySelectorAll('input[name="checks"]');
const priceDisplay = document.getElementById("price");
const submitBtn = document.getElementById("submit-btn");
const modalWindow = document.getElementById("modal-window");
const modalMessage = document.getElementById("modal-message");
const modalClose = document.getElementById("modal-close");

// Update price display when a tariff is selected
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selectedValue = radio.value;
    const price = priceMap[selectedValue] ?? 10;
    priceDisplay.textContent = price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  });
});

// Initialize price display on page load
window.addEventListener("DOMContentLoaded", () => {
  const checkedRadio = Array.from(radios).find((radio) => radio.checked);
  const price = priceMap[checkedRadio.value] ?? 10;
  priceDisplay.textContent = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
});

// Handle click on Subscribe button
submitBtn.addEventListener("click", () => {
  const selectedValue = document.querySelector(
    'input[name="checks"]:checked'
  ).value;
  const price = priceMap[selectedValue] ?? 10;
  modalMessage.innerHTML = `You have selected <strong>${selectedValue} downloads </strong> for $${price}. Thank you for subscribing! We're excited to have you with us!`;
  modalWindow.classList.add("active");
});

// Reset to initial state (select first radio and update price)
const resetToInitialState = () => {
  document.getElementById("check-10").checked = true;
  const initialPrice = priceMap[10];
  priceDisplay.textContent = initialPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

// Close modal window on Close button click and reset state
modalClose.addEventListener("click", () => {
  modalWindow.classList.remove("active");
  resetToInitialState();
});

// Close modal window when clicking outside the content and reset state
modalWindow.addEventListener("click", (e) => {
  if (e.target === modalWindow) {
    modalWindow.classList.remove("active");
    resetToInitialState();
  }
});
