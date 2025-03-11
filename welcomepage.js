window.onload = function() {
    const students = JSON.parse(localStorage.getItem('students')) || []; // Retrieve all stored students
  
    if (students.length > 0) {
        const profileData = students[students.length - 1]; // Get the most recently registered student
        const profileContainer = document.querySelector('.profile-details');
        profileContainer.innerHTML = `
            <h1>Welcome, ${profileData.firstName}.</h1>
            <button  type="submit" onclick="redirect(event)">Check your status.</button>
        `;
    };
}