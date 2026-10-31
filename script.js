alert("Javascript is running");
document.getElementById("inquiryForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("useremail").value.trim();
    let inquiry = document.getElementById("inquiringtext").value.trim();

    let message = document.getElementById("formMessage");

    if(name === "" || email === "" || inquiry === "") {
        message.style.color = "red";
        message.textContent = "Please complete all fields.";
        return;
    }

    if(!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Inquiry submitted successfully! We will contact you within 12-24 hours.";

});