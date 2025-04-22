// This file contains the JavaScript code for adding interactivity to the library management system.

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link li a');
    const mainContent = document.querySelector('.main-content');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.textContent;

            loadPageContent(page);
        });
    });

    function loadPageContent(page) {
        mainContent.innerHTML = `<div class="header">${page}</div>`;
        
        // Simulate fetching data for the selected page
        setTimeout(() => {
            mainContent.innerHTML += `<p>Content for ${page} will be displayed here.</p>`;
        }, 500);
    }
});

function showDashboard() {
  alert("Dashboard is under construction!");
}

function manageBooks() {
  alert("Manage Books section coming soon!");
}

function issueReturn() {
  alert("Issue/Return functionality will be added soon!");
}

function manageUsers() {
  alert("User management is in progress!");
}

function viewReports() {
  alert("Reports will be available soon!");
}

function openSettings() {
  alert("Settings page is under development!");
}

// Example of dynamic updates
document.getElementById("totalBooks").addEventListener("click", () => {
  alert("Total Books: 2,458");
});

// Open the login modal
function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

// Close the login modal
function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Switch to the sign-up form
function switchToSignUp() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signUpForm").style.display = "block";
}

// Switch to the login form
function switchToLogin() {
  document.getElementById("signUpForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function validateInput(input) {
    const sanitizedInput = input.replace(/<[^>]*>?/gm, ''); // Remove HTML tags
    return sanitizedInput.trim();
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = validateInput(document.getElementById('username').value);
    const password = validateInput(document.getElementById('password').value);

    if (username && password) {
        // Proceed with login logic
        console.log('Validated Input:', { username, password });
    } else {
        alert('Invalid input. Please try again.');
    }
});