let users = JSON.parse(localStorage.getItem("users")) || [];
let isRegisterShown = true;

function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const msg = document.getElementById("toggle-msg");

    isRegisterShown = !isRegisterShown;

    if (isRegisterShown) {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
        msg.innerText = "Already have an account?";
    } else {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        msg.innerText = "Don't have an account?";
    }
}

function validateEmail(email) {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(email);
}

function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const exists = users.some(user => user.email === email);
    if (exists) {
        alert("User already registered. Please log in.");

        return;
        // Clear input fields
        document.getElementById("register-username").value = "";
        document.getElementById("register-email").value = "";
        document.getElementById("register-password").value = "";
        document.getElementById("register-confirm-password").value = "";
        window.location.href = "login.html"; // if you had redirection
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please log in.");
    toggleForms(); // switch to login form
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    const usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];

    const user = usersFromStorage.find(user => user.email === email);

    if (!user) {
        alert("User not found. Please register.");
        toggleForms(); // switch to register form
        return;
    }

    if (user.password !== password) {
        alert("Incorrect password.");
        return;
    }

    alert(`Welcome, ${user.username}! Redirecting to home...`);
    window.location.href = "index.html"; // Redirect after login
}

// Start with Register Form
document.getElementById("register-form").style.display = "block";
document.getElementById("login-form").style.display = "none";