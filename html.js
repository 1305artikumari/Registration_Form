function validateForm() {
    debugger;
    // Fetching form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Regular expressions for email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // Check if name is not empty
    if (name === '') {
      alert('Please enter your name.');
      return false;
    }

    // Check if email is valid
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Check if phone number is valid
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }

    // All validations passed, form can be submitted
    return true;
  }