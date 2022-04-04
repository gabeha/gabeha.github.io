const navToggle = document.getElementById("menu-toggle");
const links = document.querySelector(".navbar-links");
const section = document.querySelector(".navbar-sections");
const menuItem = document.querySelectorAll(".menu-item");
const logo = document.querySelector(".logo");


/**
	Makes drop-down menu appear when navbar toggle is clicked
**/
navToggle.addEventListener('click', function() {
	links.classList.toggle("mobile-nav");
	section.classList.toggle("column-view");
})

/**
	Makes drop-down menu disappear when link in navbar is clicked
**/
for (let i = 0; i<menuItem.length; i++) {
	menuItem[i].addEventListener('click', function() {
	links.classList.toggle("mobile-nav");
	section.classList.toggle("column-view");
})
}

/**
	Makes drop-down menu disappear when name logo is clicked
**/
logo.addEventListener('click', function() {
	if (links.classList.contains("mobile-nav")) {
		links.classList.toggle("mobile-nav");
		section.classList.toggle("column-view");
	}
})
