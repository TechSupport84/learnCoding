function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
}



function register() {
    
    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!fullName || !email || !username || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required.";
        return;
    }
    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }
    console.log("User registered successfully:", { fullName, email, username });
    alert("Registration successful!");
    document.querySelector("form").reset();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
