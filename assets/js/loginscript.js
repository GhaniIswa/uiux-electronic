const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username').value.trim();

  if (usernameInput === "user") {
    window.location.href = "dashboard.html";
  } 
});
