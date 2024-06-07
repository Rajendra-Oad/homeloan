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


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    checkFormErrors();
});



function checkFormErrors() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let emailField = document.getElementById("email");
    let passwordField = document.getElementById("password");

    emailField.classList.remove("input-error", "input-success");
    passwordField.classList.remove("input-error", "input-success");

    

    if (email === "" && password === "") {
        // showAlert('Enter email and password', 'error');
        emailError.innerHTML = "<i class='fa-solid fa-circle-exclamation p-0 me-2 mt-2'></i>Fill the Email Address";
        passwordError.innerHTML = "<i class='fa-solid fa-circle-exclamation p-0 me-2 mt-2'></i>Fill the above Password";
        emailField.classList.add("input-error");
        passwordField.classList.add("input-error");
    } else if (email === "") {
        // showAlert('Enter email address', 'error');
        emailError.innerHTML = "<i class='fa-solid fa-circle-exclamation p-0 me-2 mt-2'></i>Fill the Email Address";
        passwordError.innerHTML = "";
        emailField.classList.add("input-error");
        passwordField.classList.remove("input-error");
    } else if (password === "") {
        // showAlert('Enter password', 'error');
        emailError.innerHTML = "";
        passwordError.innerHTML = "<i class='fa-solid fa-circle-exclamation p-0 me-2 mt-2'></i>Fill the above Password";
        emailField.classList.remove("input-error");
        passwordField.classList.add("input-error");
    } else {
        emailError.innerHTML = "";
        passwordError.innerHTML = "";
        emailField.classList.add("input-success");
        passwordField.classList.add("input-success");

        // Disable button to prevent multiple submissions
        let loginBtn = document.getElementById('loginBtn');
        loginBtn.disabled = true;

        const data = new FormData();
        data.append("userEmail", email);
        data.append("userPassword", password);

        let http = new XMLHttpRequest();
        http.open("POST", "http://ilandertech.com/api/index.php/Welcome/StuLogin");
        http.send(data);

        http.onreadystatechange = () => {
            if (http.readyState == 4) {
                loginBtn.disabled = false;
                if (http.status == 200) {
                    let res = JSON.parse(http.responseText);
                    if (res.status == 1) {
                        localStorage.setItem("email", email);
                        showSuccessMessage(res.message);
                        console.log(res.message);
                    } else {
                        showAlert(res.message, 'error');
                        console.log(res.message);
                    }
                } else {
                    showAlert('An error occurred. Please try again.', 'error');
                    console.log('Error:', http.statusText);
                }
            }
        };

        http.onerror = () => {
            loginBtn.disabled = false;
            showAlert('Network error. Please check your connection and try again.', 'error');
            console.log('Network error');
        };
    }
}

function showAlert(message, type = 'error') {
    const alertText = document.getElementById('alert-text');
    alertText.textContent = message;
    alertText.className = `alert alert-${type}`;
    alertText.style.display = 'block';
    alertText.innerHTML = `<i class="fa-solid fa-${type === 'error' ? 'triangle-exclamation' : 'circle-check'}"></i> ${message}`;
    alertText.style.border = type === 'error' ? "1px solid rgba(255, 0, 0, 0.2)" : "1px solid rgba(0, 128, 0, 0.2)";
    alertText.style.color = type === 'error' ? "rgb(167, 45, 45)" : "rgb(28, 105, 28)";
    alertText.style.backgroundColor = type === 'error' ? "rgba(255, 0, 0, 0.2)" : "rgba(0, 128, 0, 0.2)";
    alertText.style.top = "-30px";
    alertText.style.padding = "10px 20px";
    alertText.style.display = "block"; // Show the alert text
    setTimeout(() => {
        alertText.style.display = 'none';
    }, 3000);
}

function showSuccessMessage(message) {
    const body = document.body;
    let button = document.getElementById('loginBtn');
    button.disabled = true; // Disable the button during login process
    
    // Display loading icon inside the button
    button.innerHTML = '<img src="https://img.icons8.com/ios/50/loading.png" alt="loading" class="me-2 spinner" style="heigth:1px;width:20px;padding:2px 0"/>';
    // <i class="fa-solid fa-circle-nodes me-2 spinner py-1 "></i>
    setTimeout(()=>{
        body.innerHTML = `
        <div class="success-message">
            <div class="tick-icon">
                <i class="fa-solid fa-check"></i>
            </div>
            ${message}
        </div>
    `;
    setTimeout(() => {
        window.location.assign('../index.html');
    }, 2500);
    },2000)
}

