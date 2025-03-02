const validUsername = 'czshsSTACEYHANDSOMEMANN';
const validPassword = '12345678';
const validAdminUser = 'helloperd';
const validAdminPass = 'helloperd';

// Login function
function login(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const adminuser = document.getElementById('username').value;
    const adminpass = document.getElementById('password').value;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        window.location.href = 'homepage.html'; // Redirect on successful login
    } else if (adminuser === validAdminUser && adminpass === validAdminPass) {
        window.location.href = 'adminpage.html'; // Redirect on successful login
    } else {
        alert('Invalid username or password.');
    }
}

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
