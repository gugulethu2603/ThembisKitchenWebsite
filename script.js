// INQUIRY FORM VALIDATION

const testButton = document.getElementById("testButton");

if (testButton) {

    testButton.addEventListener("click", function () {

        let name = document.getElementById("username").value.trim();
        let email = document.getElementById("useremail").value.trim();
        let inquiry = document.getElementById("inquiringtext").value.trim();

        let message = document.getElementById("formMessage");

        if (name === "" || email === "" || inquiry === "") {
            message.style.color = "red";
            message.textContent = "Please complete all fields.";
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            message.style.color = "red";
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.style.color = "green";
        message.textContent = "Inquiry submitted successfully!";
    });

}


// ACCORDION

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(button) {

    button.addEventListener("click", function() {

        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    });

}); 


// MENU SEARCH FUNCTION

const searchBox = document.getElementById("menuSearch");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let searchValue = this.value.toLowerCase();

        let menuItems = document.querySelectorAll(".menu-item");

        menuItems.forEach(function (item) {

            let text = item.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

}