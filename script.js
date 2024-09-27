// Selecting elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
const loginButton = document.querySelector('.login-btn');

// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function to validate password
function validatePassword(password) {
    // For this example, we'll just check if the password is at least 8 characters long
    return password.length >= 8;
}

// Function to handle login
function handleLogin() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long');
        return;
    }

    // If we reach this point, the email and password are valid
    // You can add your login logic here, such as making an API call or redirecting to a new page
    alert('Login successful!');
}

// Add event listener to login button
loginButton.addEventListener('click', handleLogin);

// Add event listener to remember me checkbox
rememberMeCheckbox.addEventListener('change', () => {
    if (rememberMeCheckbox.checked) {
        // If the checkbox is checked, you can store the email and password locally
        // For this example, we'll just log a message
        console.log('Remember me checked');
    } else {
        // If the checkbox is unchecked, you can remove the stored email and password
        // For this example, we'll just log a message
        console.log('Remember me unchecked');
    }
});