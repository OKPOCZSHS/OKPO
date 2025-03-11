function signup() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        const userDetails = {
            firstName: document.getElementById('first-name').value,
            middleName: document.getElementById('middle-name').value,
            lastName: document.getElementById('last-name').value,
            suffix: document.getElementById('suffix').value,
            gradeSection: document.getElementById('grade-section').value,
            trackStrand: document.getElementById('track-strand').value,
            lrn: document.getElementById('lrn').value,
            email: document.getElementById('email').value,
        };

        if (newUsername.trim() !== "" && newPassword.trim() !== "") {
            // Retrieve existing users from local storage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if the username already exists
            const existingUser  = users.find(user => user.username === newUsername);
            if (existingUser ) {
                alert('Username already exists. Please choose a different username.');
                return;
            }

            // Add new user to the array
            users.push({
                username: newUsername,
                password: newPassword,
                profile: userDetails
            });

            // Store updated users array back to local storage
            localStorage.setItem('users', JSON.stringify(users));

            // Store the profile data in localStorage for easy access later
            localStorage.setItem('studentProfile', JSON.stringify(userDetails));

            alert('Sign-up successful! Please proceed to log in.');
            window.location.href = 'index.html'; // Redirect to login page
        } else {
            alert('Username and Password are required.');
        }
    });
}