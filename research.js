function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('clock').textContent = formattedTime;
  }
  setInterval(updateClock, 1000);

  // Sample student data for demonstration
  const students = [
    { id: "12345", violations: [], verifiedBy: "" },
    { id: "67890", violations: [], verifiedBy: "" },
    { id: "54321", violations: [], verifiedBy: "" },
    // Add more students as needed
];

function searchStudent() {
    const searchInput = document.getElementById('studentIdSearch').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    if (searchInput) {
        const filteredStudents = students.filter(student => student.id.includes(searchInput));
        
        filteredStudents.forEach(student => {
            const li = document.createElement('li');
            li.textContent = student.id;
            li.onclick = () => selectStudent(student); // Set click event to select the student
            searchResults.appendChild(li);
        });
    }
}

function selectStudent(student) {
    // Populate the violation dropdown with the student's violations
    const violationsDropdown = document.getElementById("violations");
    violationsDropdown.innerHTML = '<option value="">--Select a violation--</option>';

    student.violations.forEach(violation => {
        const option = document.createElement("option");
        option.value = violation;
        option.textContent = violation;
        violationsDropdown.appendChild(option);
    });

    // Set the verified by input to the last verifier (if any)
    document.getElementById('verified-by-input').value = student.verifiedBy || '';

    // Display the student's violations in a dedicated section
    displayViolations(student);

    // Optionally, you can also display the student's ID somewhere
    alert(`Selected Student ID: ${student.id}`);
}

function displayViolations(student) {
    const violationsList = document.getElementById('violationsList');
    violationsList.innerHTML = ''; // Clear previous violations

    if (student.violations.length > 0) {
        student.violations.forEach(violation => {
            const li = document.createElement('li');
            li.textContent = violation;
            violationsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "No violations recorded.";
        violationsList.appendChild(li);
    }
}

function addViolation() {
    const violationInput = document.getElementById('violations').value;
    const verifiedByInput = document.getElementById('verified-by-input').value;

    if (violationInput && verifiedByInput) {
        const table = document.getElementById('board');
        const noViolationsRow = document.getElementById('no-violations-row');
        if (noViolationsRow) {
            table.deleteRow(noViolationsRow.rowIndex);
        }

        const newRow = table.insertRow();
        const violationCell = newRow.insertCell(0);
        const verifiedByCell = newRow.insertCell(1);

        violationCell.textContent = violationInput;
        verifiedByCell.textContent = verifiedByInput;

        // Update the selected student's violations
        const selectedStudentId = document.getElementById('studentIdSearch').value;
        const selectedStudent = students.find(student => student.id === selectedStudentId);
        if (selectedStudent) {
            selectedStudent.violations.push(violationInput);
            selectedStudent.verifiedBy = verifiedByInput; // Store the verifier
        }

        document.getElementById('violations').value = '';
        document.getElementById('verified-by-input').value = '';
    } else {
        alert("Please select a violation and enter who verified it.");
    }
}

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