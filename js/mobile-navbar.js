const navToggle = document.getElementById("menu-toggle");
const links = document.querySelector(".navbar-links");
const section = document.querySelector(".navbar-sections");
const menuItem = document.querySelectorAll(".menu-item");


navToggle.addEventListener('click', function() {
	links.classList.toggle("mobile-nav");
	section.classList.toggle("column-view");
})

for (let i = 0; i<menuItem.length; i++) {
	menuItem[i].addEventListener('click', function() {
	links.classList.toggle("mobile-nav");
	section.classList.toggle("column-view");
})
}


