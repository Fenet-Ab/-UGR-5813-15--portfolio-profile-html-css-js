// Select the hidden content and the "See More" link
const hiddenContent = document.querySelector('.hidden-content');
const seeMoreLink = document.querySelector('.see-more-link');

// Add a click event listener to the "See More" link
seeMoreLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    
    // Toggle the visibility of the hidden content
    hiddenContent.classList.toggle('visible'); // Toggle the 'visible' class
    
    // Change the text of the link
    if (hiddenContent.classList.contains('visible')) {
        seeMoreLink.textContent = 'See Less'; // Change to "See Less" when visible
    } else {
        seeMoreLink.textContent = 'See More'; // Change to "See More" when hidden
    }
});
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px"; // Expand the menu
  } else {
    menuList.style.maxHeight = "0px"; // Collapse the menu
  }
}

// Close the menu when a navigation link is clicked
const navLinks = document.querySelectorAll("#menuList li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default navigation
    const href = link.getAttribute("href"); // Get the link's target
    menuList.style.maxHeight = "0px"; // Collapse the menu

    // Simulate navigation
    setTimeout(() => {
      window.location.href = href; // Navigate to the target page
    }, 300); // Delay for menu collapse animation
  });
});