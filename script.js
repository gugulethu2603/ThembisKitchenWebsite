document.getElementById("testButton").addEventListener("click", function () {

    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("useremail").value.trim();
    let inquiry = document.getElementById("inquiringtext").value.trim();

    let message = document.getElementById("formMessage");

    // Check for empty fields
    if (name === "" || email === "" || inquiry === "") {
        message.style.color = "red";
        message.textContent = "Please complete all fields.";
        return;
    }

    // Check email format
    if (!email.includes("@") || !email.includes(".")) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    // Success message
    message.style.color = "green";
    message.textContent = "Inquiry submitted successfully!";
});