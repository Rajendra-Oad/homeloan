document.addEventListener("DOMContentLoaded", (event) => {
  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      // Remove 'active' class from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked nav link
      navLink.classList.add("active");
    });
  });

  // Intersection Observer for fade-in and slide-in animations
  const fadeIns = document.querySelectorAll(".fade-in");
  const slideInsLeft = document.querySelectorAll(".slide-inL");
  const slideInsRight = document.querySelectorAll(".slide-inR");

  const options = {
    threshold: 0.5, // Adjust this value as needed
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, options);

  const slideInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, options);

  fadeIns.forEach((fadeIn) => {
    fadeInOnScroll.observe(fadeIn);
  });

  slideInsLeft.forEach((slideInL) => {
    slideInOnScroll.observe(slideInL);
  });
  slideInsRight.forEach((slideInR) => {
    slideInOnScroll.observe(slideInR);
  });

  // Scroll to top button functionality
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
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

//show alert
function showAlert(){
    let alert=document.getElementById("alertBox");
    if(alert.style.display==="none"){
        alert.style.display="block";
    }else {
        alert.style.display="none";
    }
}

// color theme changes
document.querySelectorAll('.color-themes .color').forEach(color =>{
    color.onclick=() =>{
        let background=color.style.background;
        console.log("Clicked color:", background);
        document.querySelector(':root').style.setProperty('--theme-colors', background);
    }
})