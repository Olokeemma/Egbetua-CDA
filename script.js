// Event listener for form submission
document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Clear any previous feedback
    document.getElementById('feedback-message').textContent = '';

    // Get form values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const gpa = parseFloat(document.getElementById('gpa').value);
    const essay = document.getElementById('essay').value.trim();
    const attachment = document.getElementById('attachment').files[0];

    // Validate fields
    if (!fullName || !email || !dob || isNaN(gpa) || gpa < 0 || gpa > 4 || !essay || !attachment) {
        document.getElementById('feedback-message').textContent = 'Please complete all fields correctly.';
        return;
    }

    // Validate GPA (should be between 0 and 4)
    if (gpa < 0 || gpa > 4) {
        document.getElementById('feedback-message').textContent = 'GPA must be between 0 and 4.';
        return;
    }

    // Validate Essay length (max 500 characters)
    if (essay.length > 500) {
        document.getElementById('feedback-message').textContent = 'Your essay must not exceed 500 characters.';
        return;
    }

    // Validate file type for attachment (only PDF allowed)
    const fileType = attachment.type;
    if (fileType !== 'application/pdf') {
        document.getElementById('feedback-message').textContent = 'Please upload a valid PDF file for your transcript.';
        return;
    }

    // If validation passes, show success message and reset form
    document.getElementById('feedback-message').textContent = 'Your application has been submitted successfully!';

    // Optionally, send the data to the server (e.g., using AJAX)
    // Example: Send form data to a server for storage

    // Reset the form after submission
    document.getElementById('application-form').reset();
});
