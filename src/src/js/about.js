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
