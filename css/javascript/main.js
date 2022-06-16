const navBurger = document.querySelectorAll("fa fa-bars")
const navList = document.querySelectorAll("nav-list")

    navBurger.addEventListener("click", function(event) {
        this.classList.toggle("active");
    })
