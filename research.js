window.onload = function() {
  const profileData = JSON.parse(localStorage.getItem('studentProfile'));

  if (profileData) {
      const profileContainer = document.querySelector('.profile-details');
      profileContainer.innerHTML = `
          <p><strong>Name:</strong> ${profileData.firstName} ${profileData.middleName} ${profileData.lastName} ${profileData.suffix}</p>
          <p><strong>Grade Level and Section:</strong> ${profileData.gradeSection}</p>
          <p><strong>Track and Strand:</strong> ${profileData.trackStrand}</p>
          <p><strong>LRN:</strong> ${profileData.lrn}</p>
          <p><strong>Email:</strong> ${profileData.email}</p>
      `;
  }
};

function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('clock').textContent = formattedTime;
  }
  setInterval(updateClock, 1000);

  // Simulate login (replace with actual authentication logic)
  const loginForm = document.getElementById('login-form');
  const mainContent = document.getElementById('main-content');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    // ... (Your authentication logic here) ...
    if (document.getElementById('username').value === 'Stacey' && document.getElementById('password').value === 'password') {
      loginForm.classList.add('hidden');
      mainContent.classList.remove('hidden');
    } else {
      alert('Invalid username or password.');
    }
});

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
