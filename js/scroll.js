/**
	Colorizes the selected link
**/
document.addEventListener("DOMContentLoaded", () => {
    const listOfLinks = document.querySelectorAll(".navbar-sections a[href^='#");
    listOfLinks.forEach(function (link) {
    link.addEventListener('click',  () => {
        listOfLinks.forEach( (link) => {
        if (link.classList.contains('highlighted') || link.classList.contains('logo')) {
            link.classList.remove('highlighted');
        }
        });
        if (link.classList.contains('highlighted') || !link.classList.contains('logo-name')) {
            link.classList.add('highlighted');
        }        
    })
    })
})

/**
	Automatically displays and hides navbar while scrolling
**/
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
          console.log(scroll_top)
         if(scroll_top < last_scroll_top && scroll_top === 0) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
              	if (links.classList.contains("mobile-nav")) {
                    links.classList.toggle("mobile-nav");
                    section.classList.toggle("column-view");
                }
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
              if (links.classList.contains("mobile-nav")) {
                    links.classList.toggle("mobile-nav");
                    section.classList.toggle("column-view");
                }
          }
          last_scroll_top = scroll_top;
    });
  }
});