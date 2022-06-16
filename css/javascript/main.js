// const navBurger = document.querySelectorAll("fa fa-bars")
// const navList = document.querySelectorAll("nav-list")

// //     navBurger.addEventListener("click", function(event) {
// //         this.classList.toggle("active");
// //     })

// function toggleIcon(event) {
//     this.classList.toggle("active");
// }

// document.querySelector("fa.fa-bars").addEventListener("click", toggleIcon);



const navBurger = document.querySelector(".nav .nav-burger")
const navList = document.querySelector('.nav-list')
const iconChange = document.querySelector(".fa")

navBurger.addEventListener("click", function() {
    navList.classList.toggle("active");
    if (navList == "nav-list active")
    iconChange.classList.replace("fa-bars","fa-angle-up")
    else {
    iconChange.classList.replace("fa-angle-up","fa-bars")
//     console.log(iconChange)}
    }
})

