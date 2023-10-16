// JavaScript for any interactivity (e.g., form validation) can be added here.
// Example form validation:

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Please fill in all required fields.');
      event.preventDefault();
    }
  });
});
