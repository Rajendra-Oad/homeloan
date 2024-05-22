// Select the eye icon and password input elements
let eyeIcon = document.getElementById("eye-icon");
let passwordInput = document.getElementById("password");

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
    alertContainer.style.top = "-25px";
    alertContainer.style.padding = "10px 20px";
    alertContainer.style.display = "block"; // Show the alert text

    // Hide the alert text after 3.5 seconds
    setTimeout(() => {
        alertContainer.style.top = "-100px";
        alertContainer.style.display = "none";
    }, 2000);
}


function checkFormErrors() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" && password === "") {
        showAlert('Enter email and password');
    } else if (email === "") {
        showAlert('Enter email address');
    } else if (password === "") {
        showAlert('Enter password');
    }
    else {
        // No errors
        const data = new FormData();
        data.append("userEmail", email);
        data.append("userPassword", password);

        let http = new XMLHttpRequest();
        http.open("POST", "http://ilandertech.com/api/index.php/Welcome/StuLogin");
        http.send(data);
        http.onreadystatechange = () => {
            if (http.status == 200 && http.readyState == 4) {
                let res = JSON.parse(http.response);
                if (res.status == 1) {
                    localStorage.setItem("email", email);
                    showAlert(res.message, 'success');
                    console.log(res.message);
                    // redirect to dashboard on correct entry in inputs
                    setTimeout(() => {
                        window.location.assign('../index.html');
                    }, 3000);
                } else {
                    showAlert(res.message);
                    console.log(res.message);
                }
            }
        }
    }
}


// click to the login button
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    checkFormErrors();
});