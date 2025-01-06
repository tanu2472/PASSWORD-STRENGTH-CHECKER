function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthMessage = document.getElementById('strengthMessage');
  
    let strength = 0;
  
    // Check length
    if (password.length >= 8) strength++;
  
    // Check for lowercase letters
    if (password.match(/[a-z]/)) strength++;
  
    // Check for uppercase letters
    if (password.match(/[A-Z]/)) strength++;
  
    // Check for numbers
    if (password.match(/[0-9]/)) strength++;
  
    // Check for special characters
    if (password.match(/[\W_]/)) strength++;
  
    // Evaluate strength
    let message = '';
    switch (strength) {
      case 1:
        message = 'Very Weak';
        break;
      case 2:
        message = 'Weak';
        break;
      case 3:
        message = 'Moderate';
        break;
      case 4:
        message = 'Strong';
        break;
      case 5:
        message = 'Very Strong';
        break;
      default:
        message = 'Very Weak';
    }
  
    strengthMessage.textContent = `Password strength: ${message}`;
    strengthMessage.style.color = strength >= 3 ? 'green' : 'red';
  }
  