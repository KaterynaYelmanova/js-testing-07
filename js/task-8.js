//експерименти з чат гпт
const images = document.querySelectorAll(".gallery img");
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

images.forEach((img) => {
  img.addEventListener("click", function () {
    modalContent.innerHTML = `<img src="${this.src}" alt="Gallery Image">`;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = "block";
  });
});

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  modal.removeChild(modalContent);
}

// Close the modal when clicking outside of the image
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

const closeBtn = document.createElement("span");
closeBtn.classList.add("close");
closeBtn.innerHTML = "&times;";
closeBtn.onclick = closeModal;
modalContent.appendChild(closeBtn);

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector("textarea");

// Function to save form state to local storage
function saveToLocalStorage() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}

// Function to load form state from local storage
function loadFromLocalStorage() {
  const savedState = localStorage.getItem("feedback-form-state");
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}

// Function to clear form state
function clearFormState() {
  localStorage.removeItem("feedback-form-state");
  emailInput.value = "";
  messageInput.value = "";
}

// Event listeners for input events
emailInput.addEventListener("input", saveToLocalStorage);
messageInput.addEventListener("input", saveToLocalStorage);

// Load form state on page load
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

// Clear form state and log submitted data on form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  const formState = JSON.parse(localStorage.getItem("feedback-form-state"));
  console.log(formState);
  clearFormState();
});
