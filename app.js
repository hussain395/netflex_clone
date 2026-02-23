// Select elements
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const signInBtn = document.querySelector('button');

// Click event
signInBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Empty check
    if (email === "" || password === "") {
        alert("Please enter email/mobile and password");
        return;
    }

    // Email or mobile validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email) && !mobileRegex.test(email)) {
        alert("Enter a valid email or 10-digit mobile number");
        return;
    }

    // Password length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Success
    alert("Login successful!");
});
