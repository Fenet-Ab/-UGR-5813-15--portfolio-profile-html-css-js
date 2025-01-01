// Hamburger menu toggle for mobile devices
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Sidebar toggle for tablets in landscape mode
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.createElement("div");
sidebarToggle.className = "sidebar-toggle";
sidebarToggle.innerText = "☰";
document.body.appendChild(sidebarToggle);

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});
