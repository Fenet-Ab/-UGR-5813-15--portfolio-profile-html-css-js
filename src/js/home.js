// let menuList = document.getElementById("menuList");
// menuList.style.maxHeight = "0px";
// function toggleMenu() {
//   if (menuList.style.maxHeight === "0px") {
//     menuList.style.maxHeight = "300px";
//   } else {
//     menuList.style.maxHeight = "0px";
//   }
// }
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
  link.addEventListener("click", () => {
    menuList.style.maxHeight = "0px"; // Collapse the menu
  });
});