// admin.js

// Assuming you've already authenticated the admin user
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve subscriptions from local storage
    function getSubscriptions() {
        const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
        const subscriptionList = document.getElementById('subscriptionList'); // Get the <ul> element

        // Clear any existing list items
        subscriptionList.innerHTML = '';

        // Display the subscriptions
        subscriptions.forEach((email, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Subscription ${index + 1}: ${email}`;
            subscriptionList.appendChild(listItem);
        });
    }

    // Call this function when the admin dashboard loads
    getSubscriptions();
});
