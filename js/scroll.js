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