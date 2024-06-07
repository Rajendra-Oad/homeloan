document.addEventListener("DOMContentLoaded", (event) => {


  var dropdownButton = document.getElementById("dropdownButton");
    var dropdownMenu = document.getElementById("alertBox");

    dropdownButton.addEventListener("click", function(event) {
      // Prevent the default action and stop propagation
      event.preventDefault();
      event.stopPropagation();

      // Toggle the visibility of the dropdown menu
      dropdownMenu.classList.toggle("show");

      // Set the top position of the dropdown menu
      var rect = dropdownButton.getBoundingClientRect();
      dropdownMenu.style.top = rect.bottom + "px";
      dropdownMenu.style.right = rect.bottom + "px";
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
      if (!event.target.matches('#dropdownButton')) {
          if (dropdownMenu.classList.contains('show')) {
              dropdownMenu.classList.remove('show');
          }
      }
      
    
  });
  // Hide the dropdown menu initially
  dropdownMenu.classList.remove('show');




  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      // Remove 'active' class from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked nav link
      navLink.classList.add("active");
    });
  });

  // Function to format number with commas
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Function to animate the count
  function animateCount(element) {
    const target = parseInt(element.getAttribute("data-count"));
    const duration = 3500; // duration of the animation in milliseconds
    let start = 0;
    let startTime = null;

    function updateCount(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const step = Math.min(progress / duration, 1);
      const value = Math.floor(step * target);
      element.innerText = formatNumberWithCommas(value);
      if (progress < duration) {
        requestAnimationFrame(updateCount);
      } else {
        element.innerText = formatNumberWithCommas(target);
      }
    }

    requestAnimationFrame(updateCount);
  }

  // Intersection Observer to detect when the element is in view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // trigger when 50% of the element is in view
    }
  );

  // Observe each count element
  document.querySelectorAll(".count").forEach((count) => {
    observer.observe(count);
  });

  // Scroll to top button functionality
  let btn = document.getElementById("topScroll");
  let navbar = document.getElementById("navbarNav");
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
    if (prevScrollpos > currentScrollPos + 1) {
      navbar.style.top = "0px";// Show the navbar
    } else if (prevScrollpos < currentScrollPos - 1) {
      navbar.style.top = "-500px";// Hide the navbar (adjust height if needed)
      navbar.style.transition = "0.5s";
      navbar.style.transitionDelay = "0.1s";  
      navbar.style.transitionTimingFunction = "ease-in-out";
      navbar.style.transitionDuration = "0.8s"
    }

    prevScrollpos = currentScrollPos; // Update previous scroll position
  };
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.Top = 0; // For Chrome, Firefox, IE, and Opera
}


// color theme changes
document.querySelectorAll(".color-themes .color").forEach((color) => {
  color.onclick = () => {
    let background = color.style.background;
    console.log("Clicked color:", background);
    document
      .querySelector(":root")
      .style.setProperty("--theme-colors", background);
  };
});
