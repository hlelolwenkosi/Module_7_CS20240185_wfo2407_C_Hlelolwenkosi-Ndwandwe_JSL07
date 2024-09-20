document.addEventListener('DOMContentLoaded', function () {
  // Select the form, modal, certificate content, and close button elements
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially by setting its display to 'none'
  modal.style.display = 'none';

  // Add a submit event listener to the form
  cardForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior

      // Get input values from the form
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      // Extract the actual values from the input fields
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input is provided

      // Validate input fields (check if they are filled in)
      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields');
          return; // Stop form submission if validation fails
      }

      // Dynamically generate certificate content, including an image logo and formatted message
      certificateContent.innerHTML = `
          <h3>Certificate of Achievement 💪🏽</h3>
          <p>This is to certify that</p>
          <p><strong>${studentName}</strong></p>
          <p>has almost completed the</p>
          <p><strong>${courseName}</strong>.</p>
          <p>With legendary perseverance and world-class bad-assery for never giving up 🏆🏆</p>
          <img src="logo.png" alt="Logo" class="certificate-logo">
          <p>${personalMessage}</p>
      `;

      // Show the modal after generating the certificate content
      modal.style.display = 'block';

      // Clear the input fields after submission
      studentNameInput.value = '';
      personalMessageInput.value = '';
      courseNameInput.value = ''; // Clear the course name input only if it's present
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; // Hide the modal
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none'; // Hide the modal when clicking outside
      }
  });
});

  