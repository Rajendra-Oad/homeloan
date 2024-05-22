// Select the eye icon and password input elements
let eyeIcon = document.getElementById("eye-icon");
let passwordInput = document.getElementById("pwd");

// Initially hide the eye icon
eyeIcon.style.display = "none";

eyeIcon.addEventListener("click", function () {
    // Toggle password visibility
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show password
        this.classList.add("fa-eye-slash");
        this.classList.remove("fa-eye");
    } else {
        passwordInput.type = "password"; // Hide password
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

passwordInput.addEventListener("input", function () {
    // Show/hide the eye icon based on input length
    if (this.value.length > 0) {
        eyeIcon.style.display = "block";
    } else {
        eyeIcon.style.display = "none";
    }
});


// Function to show the alert text
function showAlert(message, type = 'error') {
    const alertContainer = document.getElementById("alert-text");
    alertContainer.innerHTML = `<i class="fa-solid fa-${type === 'error' ? 'triangle-exclamation' : 'circle-check'}"></i> ${message}`;
    alertContainer.style.border = type === 'error' ? "1px solid rgba(255, 0, 0, 0.2)" : "1px solid rgba(0, 128, 0, 0.2)";
    alertContainer.style.color = type === 'error' ? "rgb(167, 45, 45)" : "rgb(28, 105, 28)";
    alertContainer.style.backgroundColor = type === 'error' ? "rgba(255, 0, 0, 0.2)" : "rgba(0, 128, 0, 0.2)";
    alertContainer.style.top = "100px";
    alertContainer.style.padding = "10px 20px";
    alertContainer.style.display = "block"; // Show the alert text

    // Hide the alert text after 3.5 seconds
    setTimeout(() => {
        alertContainer.style.display = "none";
    }, 3500);
}