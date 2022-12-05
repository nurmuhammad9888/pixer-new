const elNavbar = document.querySelector(".navbar-list-wrap");
const elBurger = document.querySelector(".burger-btn");

AOS.init();

elBurger.addEventListener("click" , () =>{
    elNavbar.classList.toggle("navbar-list-wrap-show");
    elBurger.classList.toggle("burger-btn-show");
    document.body.classList.toggle("body-hidden");
})