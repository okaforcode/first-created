function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name == "" || email == "" || message == "") {
      alert("Please fill out all fields.");
      return false;
    }
  
    // Success message
    document.getElementById('success-message').innerHTML = "Thank you for contacting us! We will get back to you shortly.";
    document.getElementById('contactForm').reset(); // Reset the form after submission
    return false; // Prevent page reload
  }
  