

document.addEventListener('DOMContentLoaded', (event) => {
    let navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked nav link
            navLink.classList.add('active');
        });
    });
});
let btn = document.getElementById("topScroll");
let navbar = document.getElementById("navbar");
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    // Show or hide the scroll to top button
    if (currentScrollPos > 725) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }

    // Show or hide the navbar
    if (prevScrollpos > currentScrollPos + 2) {
        navbar.style.top = "0px"; // Show the navbar
    } else if (prevScrollpos < currentScrollPos - 2) {
        navbar.style.top = "-100px"; // Hide the navbar (adjust height if needed)
    }

    prevScrollpos = currentScrollPos; // Update previous scroll position
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}



