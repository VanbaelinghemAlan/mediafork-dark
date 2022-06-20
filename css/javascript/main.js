const navBurger = document.querySelector(".nav .nav-burger")
const navList = document.querySelector('.nav-list')
const iconChange = document.querySelector(".fa")
const bodyChange = document.querySelector(".template-dark")

navBurger.addEventListener("click", function() {
    navList.classList.toggle("active");
    if (navList.classList.contains("active"))
    iconChange.classList.replace("fa-bars","fa-angle-up")
    else {
    iconChange.classList.replace("fa-angle-up","fa-bars")  
    }
})

navBurger.addEventListener("click", function() {
    bodyChange.classList.toggle("disable");})


    // plan : 
    // j'ajoute un div qui sera active au click plus tard
    // je configure en css le nouveau div (zindex)
    // Je crée une fonction pour qu'il prend certaines données
    // je crée une fonction pour qu'il se cache.
    