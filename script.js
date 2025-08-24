// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
});

// Simple login for private docs
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const docsSection = document.getElementById("docsSection");
const loginSection = document.getElementById("loginSection");

loginBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  // Simple check (replace "cloud123" with your own password)
  if (password === "cloud123") {
    loginSection.classList.add("hidden");
    docsSection.classList.remove("hidden");
  } else {
    alert("Incorrect password. Try again.");
  }
});
