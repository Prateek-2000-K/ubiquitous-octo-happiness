// Get an HTML element in JavaScript code

const facebook = document.querySelector(".facebook");
const facebookModal = document.querySelector(".facebook-modal-wrapper");
const closeButton = document.querySelector(".close-modal");


// function which shows the modal by changing the style of facebookModal to "block"
const showModal = () => {
  facebookModal.style.display = "block";
};

// function which hides the modal by changing the style of facebookModal to "none"
const closeModal = () => {
  facebookModal.style.display = "none";
};

// Call the showModal function when facebook button is clicked
facebook.addEventListener("click", () => {
  showModal();
});

// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});