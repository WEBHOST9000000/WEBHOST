document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("newsletter");
    const emailInput = document.getElementById("emailinput");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        subscribeUser(emailInput.value);
        
        form.reset();
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function subscribeUser(email) {
       
        let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
        // Add new subscription if it doesn't already exist
        if (!subscriptions.includes(email)) {
            subscriptions.push(email);
            // Save updated subscriptions back to localStorage
            localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
            console.log("Subscribed email:", email);
            alert("Thank you for subscribing!");
            console.log("Subscriptions in localStorage:", localStorage.getItem('subscriptions'));
        } else {
            alert("You are already subscribed with this email address.");
        }
    }
});
