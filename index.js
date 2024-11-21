const validUsername = 'czshsSTACEYHANDSOMEMANN';
const validPassword = '12345678';

// Login function
function login(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        window.location.href = 'homepage.html'; // Redirect on successful login
    } else {
        alert('Invalid username or password.');
    }
}

function redirect(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    window.location.href = 'researchstatus.html'; // Redirect on successful login
}

function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('clock').textContent = formattedTime;
  }
  setInterval(updateClock, 1000);

  // Simulate login (replace with actual authentication logic)
