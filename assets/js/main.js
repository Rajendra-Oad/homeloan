

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


