const navBurger = document.querySelector(".nav .nav-burger")
const navList = document.querySelector('.nav-list')
const iconChange = document.querySelector(".fa")

navBurger.addEventListener("click", function() {
    navList.classList.toggle("active");
    if (navList.classList.contains("active"))
    iconChange.classList.replace("fa-bars","fa-angle-up")
    else {
    iconChange.classList.replace("fa-angle-up","fa-bars")  
    }
})
