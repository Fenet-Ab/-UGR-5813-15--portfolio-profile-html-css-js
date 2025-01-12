
const hiddenContent = document.querySelector('.hidden-content');
const seeMoreLink = document.querySelector('.see-more-link');
seeMoreLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    // Toggle the visibility of the hidden content
    hiddenContent.classList.toggle('visible'); 
    
    // Change the text of the link
    if (hiddenContent.classList.contains('visible')) {
        seeMoreLink.textContent = 'See Less'; 
    } else {
        seeMoreLink.textContent = 'See More'; 
    }
});
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px"; 
  } else {
    menuList.style.maxHeight = "0px"; 
  }
}

// Close the menu when a navigation link is clicked
const navLinks = document.querySelectorAll("#menuList li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href"); 
    menuList.style.maxHeight = "0px";

    // Simulate navigation
    setTimeout(() => {
      window.location.href = href; 
    }, 300); 
  });
});
