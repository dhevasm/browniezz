const menu = document.querySelector(".burger");
const closeicon = document.querySelector(".close");
menu.addEventListener("click", () =>{
    const dropdown = document.querySelector(".navbar-dropdown-menu");
    dropdown.style.right = "0";
});
closeicon.addEventListener("click", () =>{
    const dropdown = document.querySelector(".navbar-dropdown-menu");
    dropdown.style.right = '-100%';
});

const closedd = document.querySelectorAll(".close-dd");
closedd.forEach(el =>{
    el.addEventListener("click", () =>{
    const dropdown = document.querySelector(".navbar-dropdown-menu");
    dropdown.style.right = "-100%";
    });
});

window.addEventListener("scroll", () =>{
    var scrolly = window.pageYOffset;
    if(scrolly > 50){
        const navbar = document.querySelector(".navbar-container");
        navbar.style.backgroundColor = "rgba(107, 36, 12, 1)";
    }else{
        const navbar = document.querySelector(".navbar-container");
        navbar.style.backgroundColor = "rgba(107, 36, 12, 0.1)";
    }
});