// JSON data containing user information
const userData = {
    "users": [
        {
            "Username": "admin",
            "Password": "web!@",
            "role": "admin",
            "email": "web@admin.com"
        },
        {
            "Username": "user",
            "Password": "web!@900",
            "role": "user",
            "email": "web@admin.com"
        }
    ]
};


// Convert the JSON data to a string
const jsonDataString = JSON.stringify(userData);

// Store the JSON data in localStorage
localStorage.setItem('userData', jsonDataString);

// Check if the data is stored correctly
const storedData = localStorage.getItem('userData');
if (storedData) {
  console.log('Data stored in localStorage successfully.');
} else {
  console.error('Error storing data in localStorage.');
}  

// Function to handle login authentication and redirect to dashboard
function login(username, password) {
    // Loop through the users array in userData
    for (let user of userData.users) {
        if (user.Username === username && user.Password === password) {
            // Authentication successful, redirect to dashboard
            redirectToDashboard(user.role);
            return true;
        }
    }
}
// Function to redirect to the dashboard based on user role
function redirectToDashboard(userRole) {
    if (userRole === "admin") {
        window.location.href = "dashboard.html"; // Redirect to admin dashboard
    } else if (userRole === "user") {
        window.location.href = "dashboard.html"; // Redirect to user dashboard
    } else {
        console.log("Invalid user role for dashboard redirection.");
    }
}

// Event listener for form submission
document.getElementById("users").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (login(username, password)) {
        // Do not clear the form or inputs here
    } else {
        console.log("Invalid! credentials")
    }
});
