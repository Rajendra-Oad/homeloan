// Initialization for ES Users
import { Collapse, initMDB } from 'mdb-ui-kit';

initMDB({ Collapse });

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


// dark mode to light mode toggle

function toggleDarkMode() {
    const root = document.documentElement;
    console.log("clicked");
    const button = document.querySelector('.toggle-dark-mode');
    if (root.classList.contains('dark-mode')) {
        root.classList.remove('dark-mode');
        button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    } else {
        root.classList.add('dark-mode');
        button.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
}

