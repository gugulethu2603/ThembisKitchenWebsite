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

// LEAFLET MAP

const mapContainer = document.getElementById("map");

if (mapContainer) {

    const map = L.map('map').setView([-26.145, 28.420], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    L.marker([-26.145, 28.420])
        .addTo(map)
        .bindPopup("Thembi's Kitchen - Daveyton Taxi Rank")
        .openPopup();
}

// MODAL POPUP

const modal = document.getElementById("specialModal");
const btn = document.getElementById("specialBtn");
const closeBtn = document.querySelector(".close");

if (btn && modal && closeBtn) {

    btn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {

        if (event.target === modal) {
            modal.style.display = "none";
        }

    });
}