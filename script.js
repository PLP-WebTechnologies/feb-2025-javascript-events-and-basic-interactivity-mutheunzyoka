// Event Handling for Button Click, Hover, and Keypress
const button = document.getElementById("interactiveButton");
button.addEventListener("click", function() {
    button.textContent = "You clicked me!";
    button.style.backgroundColor = "#e74c3c";
});

// Hover effect for gallery images
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(image => {
    image.addEventListener("mouseover", function() {
        image.style.transform = "scale(1.2)";
    });
    image.addEventListener("mouseout", function() {
        image.style.transform = "scale(1)";
    });
});

// Keypress Detection
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("You pressed Enter!");
    }
});

// Bonus: Secret Action for Double-Click
button.addEventListener("dblclick", function() {
    alert("You double-clicked the button! 🎉");
});

// Tab Functionality
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

tab1.addEventListener("click", function() {
    content1.classList.add("active");
    content2.classList.remove("active");
});

tab2.addEventListener("click", function() {
    content2.classList.add("active");
    content1.classList.remove("active");
});

// Form Validation with Real-time Feedback
const form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (username.value === "") {
        alert("Username is required.");
    } else if (!email.value.includes("@")) {
        alert("Please enter a valid email.");
    } else if (password.value.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else {
        alert("Form submitted successfully!");
    }
});
