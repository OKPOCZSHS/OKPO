const validAdminUser  = 'helloperd';
const validAdminPass = 'helloperd';

function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the users array from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for a valid user
    const validUser  = users.find(user => user.username === username && user.password === password);

    if (validUser ) {
        // Store the user's profile in localStorage
        localStorage.setItem('studentProfile', JSON.stringify(validUser .profile));
        
        // Redirect to the homepage if a valid user is found
        window.location.href = 'homepage.html';
    } else if (username === validAdminUser  && password === validAdminPass) {
        // Redirect to the admin page if admin credentials are correct
        window.location.href = 'adminpage.html';
    } else {
        // Alert if the username or password is invalid
        alert('Invalid username or password.');
    }
}

// Attach the login function to the form submission
document.getElementById('login-form').addEventListener('submit', login);

function redirect(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    window.location.href = 'researchstatus.html'; // Redirect on successful login
}

function adminRedirect(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    window.location.href = 'adminmods.html'; // Redirect on successful login
}

function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('clock').textContent = formattedTime;
}
setInterval(updateClock, 1000);

function confirmLogout() {
    // Show confirmation dialog
    const userConfirmed = confirm("Are you sure you want to log out?");
    if (userConfirmed) {
        // Logic to log out the user
        alert("You have been logged out.");
        // Redirect to the login page or homepage
        window.location.href = 'index.html'; // Replace with your actual login page
    } else {
        // User clicked "Cancel"
        alert("Log out canceled.");
    }
}


// RESETBUTTON

function resetData() {
    if (confirm("Are you sure you want to reset all data? This action cannot be undone.")) {
        localStorage.clear(); // Clear all data from localStorage
        alert("All data has been reset.");
        // Optionally, redirect to the signup page or refresh the page
        window.location.href = 'index.html'; // Change to your desired page
    }
}

// Example: Attach the reset function to a button
document.getElementById('reset-button').addEventListener('click', resetData);