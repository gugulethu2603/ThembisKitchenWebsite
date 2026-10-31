document.getElementById("testButton").addEventListener("click", function () {

    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("useremail").value.trim();
    let inquiry = document.getElementById("inquiringtext").value.trim();

    let message = document.getElementById("formMessage");

    if (name === "" || email === "" || inquiry === "") {
        message.style.color = "red";
        message.textContent = "Please complete all fields.";
        return;
    }

    // Email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Inquiry submitted successfully!";
});