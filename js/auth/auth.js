// Authentication System
// WARNING: This is client-side only and NOT secure for production!
// Use only for learning or demo purposes.

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Get current user
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

// Show message
function showMessage(elementId, message, isError = true) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

// Login Form Handler
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Get stored users
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        
        // Check if user exists and password matches
        if (users[username] && users[username].password === password) {
            // Login successful
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', username);
            
            showMessage('success-message', 'Login successful! Redirecting...', false);
            
            // Redirect to home page after 1 second
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            showMessage('error-message', 'Invalid username or password');
        }
    });
}

// Register Form Handler
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validation
        if (username.length < 3) {
            showMessage('error-message', 'Username must be at least 3 characters');
            return;
        }
        
        if (password.length < 6) {
            showMessage('error-message', 'Password must be at least 6 characters');
            return;
        }
        
        if (password !== confirmPassword) {
            showMessage('error-message', 'Passwords do not match');
            return;
        }
        
        // Get existing users
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        
        // Check if username already exists
        if (users[username]) {
            showMessage('error-message', 'Username already exists');
            return;
        }
        
        // Register new user
        users[username] = {
            password: password,
            email: email,
            createdAt: new Date().toISOString()
        };
        
        localStorage.setItem('users', JSON.stringify(users));
        
        showMessage('success-message', 'Registration successful! Redirecting to login...', false);
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Protect page function (call this on protected pages)
function protectPage() {
    if (!isLoggedIn()) {
        alert('Please login to access this page');
        window.location.href = 'login.html';
    }
}

// Update navigation based on login status
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    
    if (navMenu && !document.getElementById('login-form') && !document.getElementById('register-form')) {
        if (isLoggedIn()) {
            // Add logout button
            const logoutItem = document.createElement('li');
            logoutItem.innerHTML = `<a href="#" onclick="logout(); return false;" style="color: #00C851;">Logout (${getCurrentUser()})</a>`;
            navMenu.appendChild(logoutItem);
        } else {
            // Add login button
            const loginItem = document.createElement('li');
            loginItem.innerHTML = `<a href="login.html">Login</a>`;
            navMenu.appendChild(loginItem);
        }
    }
});